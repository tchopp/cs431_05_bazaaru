import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import logo from "./profile.png";
import "./CreatePost.css";
import { useState } from "react";
import axios from "axios";
import NavBar from '../Components/NavBar'

const Post = () => {
  const userID = Cookies.get("userName");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("Miscellaneous");
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://cs431-05.cs.rutgers.edu:5000/createPost", {
        postTitle: title,
        postDescription: description,
        postPrice: price,
        postType: type,
        postUserID: userID,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(price);
    console.log(title);
    console.log(description);
    console.log(type);
    navigate("/homepage", { state: { permID: 3 } });
    return <p1>You have sucessfully created a post!</p1>;
  };

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo-home"  />
      </header>
      <div>
        <NavBar></NavBar>
      </div>
    <div className="postInformation">
      
      <h2>Fill out the information below to create a post. </h2>
      <form onSubmit={handleSubmit}>
        <label>Post Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Post Description</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label>Price</label>
        <input
          type="number"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Product Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="accessories">Accessories</option>
          <option value="clothing">Clothing</option>
          <option value="service">Service</option>
          <option value="household">Household Items</option>
          <option value="shoes">Shoes</option>
          <option value="misc">Miscellaneous</option>
        </select>

        <button>Submit</button>
      </form>
    </div>
    </div>
  );
};
export default Post;
