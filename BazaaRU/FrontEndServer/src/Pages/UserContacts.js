import logo from "./profile.png";
import ComplaintList from "../Components/ComplaintList";

function UserContacts() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>User Feedback Listed Below</p>
        </header>
      </div>
      <ComplaintList></ComplaintList>
    </div>
  );
}

export default UserContacts;
