import React, { useState, setState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import Cookies from "js-cookie";
import "./loginForm.css";

/**
 * Takes url to direct user after successful login.
 * Can be used for re-authentication later on in addition to login page
 * @param {*} url 
 * @returns Login Form so the user can log in 
 */
//takes url to direct user after successful login. Can be used for re-authentication later on in addition to login page
function LoginForm(url) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  var post = "false";

  const weblink = url.name;

  const navigate = useNavigate();

  //error messages for when user inputs invalid credentials
  const errors = {
    login: "invalid username/password",
  };

  function verifyLogin(username) {
    console.log("from login: ", post);
    if (post === "true") {
      Cookies.set("userName", username);
      navigate(weblink);
    } else {
      setErrorMessages({
        name: "username",
        message: errors.login,
      });
    }
  }

  async function getLogin(formInput, username) {
    await axios
      .post("http://cs431-05.cs.rutgers.edu:5000/login", formInput)
      .then((response) => {
        post = response.data.received;
      });

    verifyLogin(username);
  }

  //Event handler when user presses sign in buttom
  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();
    var { username, password } = document.forms[0]; //grabs inputted information
    const formInput = { uName: username.value, pWord: password.value };

    await getLogin(formInput, username.value);
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
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app_login">
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>
  );
}

export default LoginForm;
