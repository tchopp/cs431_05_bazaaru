import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "./profile.png"; //Need to replace image with project image
import "./Home.css";
import { CatalogWeekly } from "../Components/WeeklyProducts";
import SearchBar from "../Components/Search/SearchBar";
import Cookies from "js-cookie";
import axios from "axios";
//import { useHistory } from "react-router-dom";

function Home() {
  const styles = {
    fontSize: 20,
    marginRight: "20px",
  };
  //const [isLoading, setLoading] = useState(true);
  const [permID, setPermID] = useState("");
  const username = Cookies.get("userName");
  const reqData = { username: username };
  useEffect(() => {
    axios
      .post("http://cs431-05.cs.rutgers.edu:5000/accountRank", reqData)
      .then((response) => {
        //setLoading("false");
        setPermID(response.data.permID);
      });
  });
  const navigate = useNavigate();
  //console.log(permID);
  function signOut() {
    //console.log("pressed");
    navigate("/");
  }
  function toCatalog() {
    //console.log("pressed");
    navigate("/homepage/catalog");
  }
  function toAbout() {
    //console.log("pressed");
    navigate("/homepage/about");
  }
  function toPost() {
    //console.log("pressed");
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
  // if (isLoading) {
  //   return <div className="App">Loading...</div>;
  // }
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Rutgers BazaaRU</p>
      </header>
      <SearchBar></SearchBar>
      <header className="Service-bar">
        <button style={styles} onClick={toAbout}>
          About
        </button>
        <button style={styles} onClick={toCatalog}>
          Product Catalog
        </button>
        <button style={styles} onClick={toPost}>
          Create Posting
        </button>
        <button style={styles} onClick={toProfile}>
          Account Profile
        </button>
        {/*if admin/mod account, render the admin view account button and user contacts/requests */}
        {(permID === 3 || permID === 2) && (
          <button style={styles} onClick={toAccountList}>
            Account List
          </button>
        )}
        {(permID === 3 || permID === 2) && (
          <button style={styles} onClick={toContactList}>
            User Contacts
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
