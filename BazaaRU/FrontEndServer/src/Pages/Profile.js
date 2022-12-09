import React from "react";
import logo from "./profile.png";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Account from "../Components/Account";
import PasswordChange from "../Components/PasswordChange";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function Profile() {
  const navigate = useNavigate();
  const styles = {
    fontSize: 20,
    marginRight: "20px",
  };

  const [permID, setPermID] = useState("");
  const username = Cookies.get("userName");
  const reqData = { username: username };
  useEffect(() => {
    axios
      .post("http://cs431-05.cs.rutgers.edu:5000/accountRank", reqData)
      .then((response) => {
        setPermID(response.data.permID);
      });
  });

  function toPurchaseHistory() {
    navigate("/homepage/profile/transactions");
  }
  function toAddBalance() {
    navigate("/homepage/profile/updatebalance");
  }
  function toProfileTest() {
    navigate("/homepage/profile/profiletest");
  }
  function toAccountList() {
    navigate("/homepage/accountList");
  }
  function toContactList() {
    navigate("/homepage/userContacts");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"  />
        <p>Account Profile</p>
      </header>
      <Account></Account>
      <button style={styles} onClick={toPurchaseHistory}>
        Purchase History
      </button>
      <button style={styles} onClick={toAddBalance}>
        Update Account Balance
      </button>
      <button style={styles} onClick={toProfileTest}>
        Search Profile
      </button>
      {(permID === 3 || permID === 2) && (
        <button style={styles} onClick={toAccountList}>
          Account List
        </button>
        )}
      {(permID === 3 || permID === 2) && (
        <button style={styles} onClick={toContactList}>
          User Feedback
        </button>
      )}
      <PasswordChange></PasswordChange>
    </div>
  );
}

export default Profile;
