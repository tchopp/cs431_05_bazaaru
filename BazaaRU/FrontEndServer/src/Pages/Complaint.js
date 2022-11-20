import logo from "./profile.png"; //Need to replace image with project image
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Complaint.css";

//This is the default view/ Login page to get into the actual BazaaRU Homepage
function Complaint() {
  const navigate = useNavigate();
  const name = Cookies.get("userName");
  const [type, setType] = useState("Complaint");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Note: Need Axios call to database to store {type} of request, {description}, complaint number, and username {name} into a database
    console.log(type);
    console.log(description);
    navigate("/homepage");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Please complete the form below</p>
      </header>
      <div className="Contact-Information">
        <form onSubmit={handleSubmit}>
          <label>What are you submitting?</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Complaint">Complaint</option>
            <option value="Request">Request</option>
            <option value="Feedback">Feedback</option>
          </select>

          <label>Description</label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Complaint;
