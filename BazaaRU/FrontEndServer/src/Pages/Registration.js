import React from "react";
import logo from "./profile.png"; //Need to replace image with project image
import "./Registration.css";
import RegistrationForm from "../Components/RegistrationForm";
import { useState } from "react";

//import { useHistory } from "react-router-dom";

function Registration() {
  const [url, setUrl] = useState("/");
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Account Registration</p>
      </header>
      <RegistrationForm name={url}></RegistrationForm>
    </div>
  );
}

export default Registration;
