import logo from "./profile.png"; //Need to replace image with project image
import "./Profile.css";
import { useLocation } from "react-router-dom";
import Account from "../Components/Account";
//This is the default view/ Login page to get into the actual BazaaRU Homepage
function Profile() {
  const { state } = useLocation();
  const { username } = state;
  const permID = 3;
  //replace the permission ID with userID*****************************
  //console.log("state: ", state);
  console.log("userId:", username);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Account Profile</p>
      </header>
      <Account userID={permID}></Account>
      <button>Purchase History</button>
    </div>
  );
}

export default Profile;
