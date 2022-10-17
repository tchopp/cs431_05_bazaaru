import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ReactDOM from "react-dom";

import "./loginForm.css"; //Style of login form

//takes url to direct user after successful login. Can be used for re-authentication later on in addition to login page
function LoginForm(url) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const weblink = url.name;
  if (isAuthenticated) {
    return <Navigate to={weblink} />; //replace with UseNavigate hook once account information is completed
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
    username: "invalid username",
    password: "invalid password",
  };

  //Event handler when user presses sign in buttom
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { username, password } = document.forms[0]; //grabs inputted information    

    // Find user login info
    const userData = database.find((user) => user.username === username.value);

    //Fetch request to test connection to the backend server
    fetch('http://localhost:5000/login');
	
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
        name: "username",
        message: errors.username,
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
          <input type="text" name="username" required />
          {renderErrorMessage("username")}
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
