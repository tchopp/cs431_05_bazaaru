import logo from "./profile.png"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Complaint.css";
import axios from "axios";
import NavBar from "../Components/NavBar.jsx";

function Complaint() {
  const navigate = useNavigate();
  const name = Cookies.get("userName");
  const [type, setType] = useState("Complaint");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const complaintInfo = { uName: name, cType: type, cDesc: description };
    axios.post(
      "http://cs431-05.cs.rutgers.edu:5000/addComplaint",
      complaintInfo
    );
    navigate("/homepage");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"  />
        <NavBar></NavBar>
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
