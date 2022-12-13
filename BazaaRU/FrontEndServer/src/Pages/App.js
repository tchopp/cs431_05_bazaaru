import logo from "./profile.png";
import "./App.css";
import LoginForm from "../Components/LoginForm";
import { useState } from "react";
/**
 * Front page of the website
 * @returns A form to log in and a link to make a new account 
 */
function App() {
  const [url, setUrl] = useState("/homepage");
  return (
    <div className="App_LoginPage">
      <div className="bubble_container">
        <div className="bubbles">
            <span style={{"--t":"10"}}></span>
            <span style={{"--t":"6"}}></span>
            <span style={{"--t":"14"}}></span>
            <span style={{"--t":"25"}}></span>
            <span style={{"--t":"7"}}></span>
            <span style={{"--t":"10"}}></span>
            <span style={{"--t":"31"}}></span>
            <span style={{"--t":"20"}}></span>
            <span style={{"--t":"16"}}></span>
            <span style={{"--t":"19"}}></span>
            <span style={{"--t":"9"}}></span>
            <span style={{"--t":"24"}}></span>
            <span style={{"--t":"12"}}></span>
            <span style={{"--t":"19"}}></span>
            <span style={{"--t":"13"}}></span>
            <span style={{"--t":"35"}}></span>
            <span style={{"--t":"24"}}></span>
            <span style={{"--t":"12"}}></span>
            <span style={{"--t":"10"}}></span>
            <span style={{"--t":"15"}}></span>
            <span style={{"--t":"16"}}></span>
            <span style={{"--t":"10"}}></span>
            <span style={{"--t":"27"}}></span>
            <span style={{"--t":"14"}}></span>
            <span style={{"--t":"31"}}></span>
            <span style={{"--t":"12"}}></span>
            <span style={{"--t":"16"}}></span>
            <span style={{"--t":"26"}}></span>
            <span style={{"--t":"16"}}></span>
            <span style={{"--t":"7"}}></span>
            <span style={{"--t":"29"}}></span>
            <span style={{"--t":"35"}}></span>
            <span style={{"--t":"10"}}></span>
            <span style={{"--t":"4"}}></span>
            <span style={{"--t":"16"}}></span>
            <span style={{"--t":"27"}}></span>
            <span style={{"--t":"30"}}></span>
        </div>
        <div className="logo">
            <img src={logo}></img>
        </div>
        <LoginForm name={url}></LoginForm>
        <a className="Registration-link" href="/registration">
          Don't have an account? Register one now!
        </a>
      </div>     
    </div>
  );
}

export default App;
