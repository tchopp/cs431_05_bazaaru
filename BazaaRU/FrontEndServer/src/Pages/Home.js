import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "./profile.png"; //Need to replace image with project image
import "./Home.css";
import { Post } from "../Components/Post/Post.js";
import { CatalogWeekly } from "../Components/WeeklyProducts";
import SearchBar from '../Components/Search/SearchBar';
//import { useHistory } from "react-router-dom";

function Home() {
  const styles = {
    fontSize: 20,
    marginRight: "20px",
  };
  const navigate = useNavigate();
  const { state } = useLocation();
  //replace the permission ID with userID******************************88
  const { permID } = state;
  console.log("permID: ", permID);
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
    navigate("/homepage/createpost", { permID });
  }
  function toProfile() {
    navigate("/homepage/profile", { state });
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
      <CatalogWeekly />
    </div>
  );
}

export default Home;
