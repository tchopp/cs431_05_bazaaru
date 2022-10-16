import React from "react";
import logo from "./profile.png"; //Need to replace image with project image

//import { useHistory } from "react-router-dom";
import {Results} from '../Components/Results/searchResults.js'

function resultsList() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Results />
      </header>
    </div>
  );
}

export default resultsList;