
import {Chat} from "./Chat";
import { Fragment } from "react";
import NavBar from "../Components/NavBar.jsx"

import logo from "./profile.png";
const Messages = () => { 
    return (
        <div>
        <header className="App-header">
        <img src={logo} className="App-logo-home"  />
        <p>Rutgers BazaaRU</p>
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