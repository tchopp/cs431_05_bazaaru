import React from "react";
import logo from "./profile.png"; //Need to replace image with project image

//import { useHistory } from "react-router-dom";
import {TestResults} from '../Components/Results/searchResultsTest.js'

function resultsList() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestResults />
      </header>
    </div>
  );
}

export default resultsList;