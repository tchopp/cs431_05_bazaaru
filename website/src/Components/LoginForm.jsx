import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ReactDOM from "react-dom";

import "./loginForm.css";

//functional component, not class component
function LoginForm() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/homepage" />;
  }

  // User Login info
  const database = [
    //Needs to eventually be replaced with a hashmap/mySQL database
    {
      username: "ac1",
      password: "pi",
    },
    {
      username: "ac2",
      password: "phi",
    },
  ];

  //error messages for when user inputs invalid credentials
  const errors = {
    usernameError: "invalid username",
    password: "invalid password",
  };

  //Event handler when user presses sign in buttom
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { usernameError, password } = document.forms[0];

    // Find user login info
    const userData = database.find(
      (user) => user.username === usernameError.value
    );

    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsAuthenticated(true);
      }
    } else {
      // Username not found
      setErrorMessages({
        name: "usernameError",
        message: errors.usernameError,
      });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="usernameError" required />
          {renderErrorMessage("usernameError")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
          {renderErrorMessage("password")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isAuthenticated ? (
          <div>User is successfully logged in</div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default LoginForm;
