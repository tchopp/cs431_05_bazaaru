
import {Chat} from "./Chat";
import { Fragment } from "react";
import NavBar from "../Components/NavBar.jsx"
/**
 * Creates individual message component for the chat feature
 */
import logo from "../Pages/profile.png";
const Messages = () => { 
    return (
        <div>
        <header className="App-header">
        <img src={logo} className="App-logo-home"  />
      </header>
      <div>
        <NavBar></NavBar>
      </div>
        <Fragment>
            <Chat />
        </Fragment>
        </div>
    );
}

export default Messages;