import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import Cookies from "js-cookie";
import "./PasswordChange.css"; //Style of login form

//takes url to direct user after successful login. Can be used for re-authentication later on in addition to login page
function PasswordChange() {

  const username = Cookies.get("userName");

  const navigate = useNavigate();

  //Event handler when user presses sign in buttom
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { password } = document.forms[0]; //grabs inputted information

    const formInput = { uName: username, pWord: password.value };

    //Axios put request
    axios.post('http://cs431-05.cs.rutgers.edu:5000/passwordChange', formInput);

  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="password" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="input-form">
        <div className="title">Change Password</div>
        {renderForm}
      </div>
    </div>
  );
}

export default PasswordChange;