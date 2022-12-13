import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import './ComplaintList.css';

/**
 * This function allows moderators and admins to see a list of complaints to improve the website
 * @param {*} props permission ID
 * @returns list of complaints made by users
 */
export const ComplaintList = (props) => {
  const [complaintsData, setComplaintsData] = useState([
    {
      username: "default",
      complaintID: "1",
      type: "Complaint",
      description: "desc",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://cs431-05.cs.rutgers.edu:5000/complaintList")
      .then((response) => {
        console.log(response.data);
        setComplaintsData(response.data);
      });
  });

  function deleteComplaint(comID) {
    const complaintData = { cID: comID };
    axios.post(
      "http://cs431-05.cs.rutgers.edu:5000/deleteComplaint",
      complaintData
    );
  }

  return (
    <div className="app-complaints">
    <ul>
      {complaintsData.map((item) => (
        <li key={item.complaintID}>
          <div>Username: {item.username}</div>
          <div>Complaint ID: {item.complaintID}</div>
          <div>Complaint Type: {item.type}</div>
          <div>Complaint Description: {item.description}</div>
          <button
            class="delete complaint"
            type="button"
            onClick={() => deleteComplaint(item.complaintID)}
          >
            Delete Complaint
          </button>
          <div>---</div>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default ComplaintList;
