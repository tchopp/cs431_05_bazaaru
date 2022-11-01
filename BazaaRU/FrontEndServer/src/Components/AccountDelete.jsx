import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";

import "./AccountDelete.css"; //Style of login form

//takes url to direct user after successful login. Can be used for re-authentication later on in addition to login page
function AccountDelete() {

  const navigate = useNavigate();

  //Event handler when user presses sign in buttom
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { username } = document.forms[0]; //grabs inputted information

    const formInput = { uName: username.value };

    //Axios put request
    axios.put('http://cs431-05.cs.rutgers.edu:5000/deleteAccount', formInput);

  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="username" required />
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
        <div className="title">Delete User</div>
        {renderForm}
      </div>
    </div>
  );
}

export default AccountDelete;
