import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "./profile.png"; //Need to replace image with project image
import "./Home.css";
import { CatalogWeekly } from "../Components/WeeklyProducts";
import SearchBar from "../Components/Search/SearchBar";
import Cookies from "js-cookie";
//import { useHistory } from "react-router-dom";

function Home() {
  const styles = {
    fontSize: 20,
    marginRight: "20px",
  };
  const navigate = useNavigate();
  const { state } = useLocation();
  //replace the permission ID with userID******************************88
  console.log(state);
  const { username } = state;
  const userName = Cookies.get("userName");
  console.log("username2: ", userName);
  console.log("username: ", username);
  const permID = 3;
  function signOut() {
    //console.log("pressed");
    navigate("/");
  }
  function toCatalog() {
    //console.log("pressed");
    Cookies.remove("userName", { path: "/", domain: "rutgers.edu" });
    navigate("/homepage/catalog");
  }
  function toAbout() {
    //console.log("pressed");
    navigate("/homepage/about");
  }
  function toPost() {
    //console.log("pressed");
    navigate("/homepage/createpost", { state: { username: username } });
  }
  function toProfile() {
    navigate("/homepage/profile");
  }
  function toAccountList() {
    navigate("/homepage/accountList");
  }

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
        {/*if admin account, render the admin view account button */}
        {permID === 3 && (
          <button style={styles} onClick={toAccountList}>
            Account List
          </button>
        )}
        <button style={styles} onClick={signOut}>
          Sign Out
        </button>
      </header>
      <h3>Featured Items/Services From This Week</h3>
      <CatalogWeekly></CatalogWeekly>
    </div>
  );
}

export default Home;
