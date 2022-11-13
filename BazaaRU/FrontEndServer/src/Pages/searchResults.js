import React from 'react';
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "./profile.png";
import { useNavigate } from "react-router-dom";
import {SearchPost} from '../Components/Post/SearchPost.js'
import SearchBar from '../Components/Search/SearchBar'


const SearchResults = (props) => {

  const {state} = useLocation(); //grabs inputted information
  const {passkeyword} = state;

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
     e.preventDefault();
     

    //C2. Send the object to express server via axios

    //C3. Direct to a different page
    navigate("/homepage/results");
  };
  return (<div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Rutgers BazaaRU</p>
      <SearchBar></SearchBar>
      <SearchPost post_KW = {passkeyword}></SearchPost>
      </header>
  
      </div>)
  
  };
  export default SearchResults;
