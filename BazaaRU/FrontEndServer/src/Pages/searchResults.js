import React from 'react';
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "./profile.png";
import { useNavigate } from "react-router-dom";
import {SearchPost} from '../Components/Post/SearchPost.js'
import {SearchAC} from '../Components/Accounts/SearchAC.js'
import SearchBar from '../Components/Search/SearchBar'


const SearchResults = (props) => {

  const {state} = useLocation();
  const {passkeyword} = state;

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
     e.preventDefault();
    navigate("/homepage/results");
  };
  return (<div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Rutgers BazaaRU</p>
      <SearchBar></SearchBar>
      <SearchAC ac_KW = {passkeyword}></SearchAC>
      <SearchPost post_KW = {passkeyword}></SearchPost>
      </header>
  
      </div>)
  
  };
  export default SearchResults;
