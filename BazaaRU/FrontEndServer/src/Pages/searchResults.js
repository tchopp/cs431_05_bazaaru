import React from 'react';
import { Navigate } from "react-router-dom";
import logo from "./profile.png";
import { useNavigate } from "react-router-dom";
import {SearchPost} from '../Components/Post/SearchPost.js'


const SearchResults = (props) => {

  var { keyword } = document.forms[0]; //grabs inputted information

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
     e.preventDefault();
     

    //C2. Send the object to express server via axios

    //C3. Direct to a different page
    navigate("/homepage/results", { state: "gutter" });
  };
  return (<div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Rutgers BazaaRU</p>
      <header className = "searchBar">
        <div class="form-container">
        <form class="form" onSubmit={handleSubmit}>
        <input name="search"
        type="input"
        placeholder="search..."/>
        <button>Submit</button>
        </form>
        </div>
      </header>
      <SearchPost kw = {"gutter"}></SearchPost>
      </header>
  
      </div>)
  
  };
  export default SearchResults;
