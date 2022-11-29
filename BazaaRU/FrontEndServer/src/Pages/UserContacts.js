import logo from "./profile.png"; //Need to replace image with project image
import Complaint from "../Components/Complaint";
import { useState } from "react";
import ComplaintList from "../Components/ComplaintList";

//This is the default view/ Login page to get into the actual BazaaRU Homepage
function UserContacts() {
  const [complaintID, setComplaintID] = useState("");

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    const formInput = { ComplaintID: complaintID };
    //Axios put request to delete complaint from complaint database--------------
  };

  const handleChange = (event) => {
    setComplaintID(event.target.value);
  };

  const complaintInformation = {
    user: "Bob",
    complaintID: "1",
    type: "Request",
    description: "Hello World",
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>User Complaints Listed Below</p>
        </header>
      </div>
      {/*Display all of the user requests from database here. There is a complaint component if needed. Example listed. 
      Need to map complaint as did for transaction or you can use your own implementation*/}
      <ComplaintList></ComplaintList>
    </div>
  );
}

export default UserContacts;
