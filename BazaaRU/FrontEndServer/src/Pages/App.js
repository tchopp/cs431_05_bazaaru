import logo from "./profile.png"; //Need to replace image with project image
import "./App.css";
import LoginForm from "../Components/LoginForm";
import { useState } from "react";

//This is the default view/ Login page to get into the actual BazaaRU Homepage
function App() {
  const [url, setUrl] = useState("/homepage");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to BazaaRU. Please sign in with your account below.</p>
      </header>
      <LoginForm name={url}></LoginForm>
      <a className="Registration-link" href="/registration">
        Don't have an account? Register one now!
      </a>
    </div>
  );
}

export default App;
