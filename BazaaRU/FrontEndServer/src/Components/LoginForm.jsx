import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";

//const baseURL = "https://cs431-05.cs.rutgers.edu/"

import "./loginForm.css"; //Style of login form

const baseURL = "https://cs431-05.cs.rutgers.edu:5000/"

//takes url to direct user after successful login. Can be used for re-authentication later on in addition to login page
function LoginForm(url) {
  // React States
  const [errorMessages, setErrorMessages, post, setPost] = useState({});

  const weblink = url.name;

  const navigate = useNavigate();

  // User Login info
  const database = [
    //Needs to eventually be replaced with a hashmap/mySQL database.******************************8
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
    // fetch("http://localhost:5000/login");
    axios.get('http://cs431-05.cs.rutgers.edu:5000/login').then((response) => {
      setPost(response.data);
    });

    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        //replace the permission ID with userID*************************************************8
        navigate(weblink, { state: { permID: 3 } });
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
        {renderForm}
      </div>
    </div>
  );
}

export default LoginForm;
