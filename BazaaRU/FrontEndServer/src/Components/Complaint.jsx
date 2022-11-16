import ReactDOM from "react-dom";
import "./Complaint.css";
import axios from "axios";

function Complaint(props) {
  const user = props.complaintInformation.user;
  const complaintID = props.complaintInformation.complaintID;
  const type = props.complaintInformation.type;
  const description = props.complaintInformation.description;
  return (
    <div className="UserContacts">
      <p>User: {user}</p>
      <p>ComplaintID: {complaintID}</p>
      <p>Type: {type}</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default Complaint;
