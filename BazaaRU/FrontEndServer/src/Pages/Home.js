import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "./profile.png"; //Need to replace image with project image
import "./Home.css";
import { Post } from "../Components/Post/Post.js";

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
    navigate("/homepage/createpost");
  }
  function toProfile() {
    navigate("/homepage/profile", { state });
  }
  function toAccountList() {
    navigate("/homepage/accountList");
  }
  function search() {
    //console.log("pressed");
    navigate("/homepage/results");
  }
  function searchtest() {
    navigate("/homepage/results=Yousof");
  }

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Rutgers BazaaRU</p>
      </header>
      <header className="searchBar">
        <div className="form-container">
          <form className="form">
            <input
              id="search"
              type="text"
              className="input"
              placeholder="search..."
            />
            <button id="submit" onClick={search}>
              submit
            </button>
            <button id="clear" onClick={searchtest}>
              clear
            </button>
          </form>
        </div>
      </header>
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
      <ul>
        <li>
          <Post
            postData={{
              username: "yousof7984",
              prod_name: "Brown Suede Sofa",
              prod_image:
                "http://www.eventsourcesolutions.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/r/brown_leather_and_microsuede_sectional.jpg",
              prod_price: 35,
              prod_category: "furniture, delivery",
              prod_desc: "Used for one year. Has normal wear and tear",
            }}
          />
        </li>
        <li>
          <Post
            postData={{
              username: "shajia1985",
              prod_name: "Groceries for Fiesta!",
              prod_image:
                "https://static.vecteezy.com/system/resources/previews/000/273/542/original/online-food-order-concept-vector.jpg",
              prod_price: 50,
              prod_category: "delivery",
              prod_desc:
                "Need 50 corn tortillas, 20 cans of black beans, and bag of rice before May 5th, 2022 for a party I'm throwing",
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Home;
