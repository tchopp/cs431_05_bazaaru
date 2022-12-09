import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./profile.png";
import "./Home.css";
import { CatalogWeekly } from "../Components/WeeklyProducts";
import SearchBar from "../Components/Search/SearchBar";
import Cookies from "js-cookie";
import axios from "axios";
import { Container } from "@mui/system";
import NavBar from "../Components/NavBar.jsx"

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
        <img src={logo} className="App-logo-home"  />
      </header>
      <div className="Nav-container">
      <NavBar></NavBar>
      </div>
      <div className="Search-container">
      <SearchBar></SearchBar>
      </div>
      
      <div className="bubble_container">
        <div className="bubbles">
            <span style={{"--t":"10"}}></span>
            <span style={{"--t":"6"}}></span>
            <span style={{"--t":"14"}}></span>
            <span style={{"--t":"25"}}></span>
            <span style={{"--t":"7"}}></span>
            <span style={{"--t":"10"}}></span>
            <span style={{"--t":"31"}}></span>
            <span style={{"--t":"20"}}></span>
            <span style={{"--t":"16"}}></span>
            <span style={{"--t":"19"}}></span>
            <span style={{"--t":"9"}}></span>
            <span style={{"--t":"24"}}></span>
            <span style={{"--t":"12"}}></span>
            <span style={{"--t":"19"}}></span>
            <span style={{"--t":"13"}}></span>
            <span style={{"--t":"35"}}></span>
            <span style={{"--t":"24"}}></span>
            <span style={{"--t":"12"}}></span>
            <span style={{"--t":"10"}}></span>
            <span style={{"--t":"15"}}></span>
            <span style={{"--t":"16"}}></span>
            <span style={{"--t":"10"}}></span>
            <span style={{"--t":"27"}}></span>
            <span style={{"--t":"14"}}></span>
            <span style={{"--t":"31"}}></span>
            <span style={{"--t":"12"}}></span>
            <span style={{"--t":"16"}}></span>
            <span style={{"--t":"26"}}></span>
            <span style={{"--t":"16"}}></span>
            <span style={{"--t":"7"}}></span>
            <span style={{"--t":"29"}}></span>
            <span style={{"--t":"35"}}></span>
            <span style={{"--t":"10"}}></span>
            <span style={{"--t":"4"}}></span>
            <span style={{"--t":"16"}}></span>
            <span style={{"--t":"27"}}></span>
            <span style={{"--t":"30"}}></span>
          </div>
        </div>

      <h3>Featured Items/Services From This Week</h3>
      <Container maxWidth={'xs'} maxHeight={'xs'} spacing={30} gap={30}>
      <CatalogWeekly></CatalogWeekly>
      </Container>
      <a className="Contact-link" href="/homepage/contact">
        Issues? Complaints? Contact an administrator.
      </a>
    </div>
  );
}

export default Home;
