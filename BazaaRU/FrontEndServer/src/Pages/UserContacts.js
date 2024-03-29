import logo from "./profile.png";
import ComplaintList from "../Components/ComplaintList";
import NavBar from "../Components/NavBar.jsx";

/**
 * 
 * @returns a page that displays all of the user complaints and feedback to admin and moderators
 */
function UserContacts() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo"  />
          <NavBar></NavBar>
          <p>User Feedback Listed Below</p>
        </header>
      </div>
      <ComplaintList></ComplaintList>
    </div>
  );
}

export default UserContacts;
