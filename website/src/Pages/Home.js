import React from "react";
import logo from "./profile.png"; //Need to replace image with project image
import "./Home.css";

//import { useHistory } from "react-router-dom";

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Rutgers BazaaRU</p>
      </header>
      <p>-Insert Homepage Design here</p>
    </div>
  );
}

export default Home;
