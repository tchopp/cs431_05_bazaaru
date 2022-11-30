import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./profile.png";
import "./Home.css";
import { CatalogWeekly } from "../Components/WeeklyProducts";
import SearchBar from "../Components/Search/SearchBar";
import ACSearchBar from "../Components/Accounts/ACSearchBar";
import Cookies from "js-cookie";
import axios from "axios";

function Home() {
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
  const navigate = useNavigate();
  function signOut() {
    navigate("/");
  }
  function toCatalog() {
    navigate("/homepage/catalog");
  }
  function toMessages() {
    navigate("/homepage/messages");
  }
  function toAbout() {
    navigate("/homepage/about");
  }
  function toPost() {
    navigate("/homepage/createpost");
  }
  function toProfile() {
    navigate("/homepage/profile");
  }
  function toAccountList() {
    navigate("/homepage/accountList");
  }
  function toContactList() {
    navigate("/homepage/userContacts");
  }

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Rutgers BazaaRU</p>
      </header>
      <SearchBar></SearchBar>
      <ACSearchBar></ACSearchBar>
      <header className="Service-bar">
        <button style={styles} onClick={toAbout}>
          About
        </button>
        <button style={styles} onClick={toCatalog}>
          Product Catalog
        </button>
        <button style={styles} onClick={toMessages}>
          Messages
        </button>
        <button style={styles} onClick={toPost}>
          Create Posting
        </button>
        <button style={styles} onClick={toProfile}>
          Account Profile
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
        <button style={styles} onClick={signOut}>
          Sign Out
        </button>
      </header>
      <h3>Featured Items/Services From This Week</h3>
      <CatalogWeekly></CatalogWeekly>
      <a className="Contact-link" href="/homepage/contact">
        Issues? Complaints? Contact an administrator.
      </a>
    </div>
  );
}

export default Home;
