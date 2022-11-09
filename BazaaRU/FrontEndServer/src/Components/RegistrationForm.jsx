import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./registrationForm.css"; //Style of login form

//takes url to direct user after successful login. Can be used for re-authentication later on in addition to login page
function RegistrationForm(url) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);

  const weblink = url.name;

  //error messages for when user inputs invalid credentials
  const errors = {
    login: "invalid username/password"
  };

  var post = 'false';

  //Event handler when user presses sign in buttom
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { username, password } = document.forms[0]; //grabs inputted information

    const formInput = { uName: username.value, pWord: password.value };

    axios.put('http://cs431-05.cs.rutgers.edu:5000/createAccount', formInput).
      then((response) => { console.log(response.data); }); 
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
        <div className="title">Registration Form</div>
        {isRegistered ? (
          <div>
            <p>User account successfully created!</p>
            <a className="Registration-link" href={weblink}>
              Please click here to return to the login page.
            </a>
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;
