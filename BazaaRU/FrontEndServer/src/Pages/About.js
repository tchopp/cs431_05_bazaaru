import React from "react";
import logo from "./profile.png"; //Need to replace image with project image

//import { useHistory } from "react-router-dom";

function About() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>-insert About here</p>
      </header>
    </div>
  );
}

export default About;
