import React from 'react';
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "./profile.png";
import { useNavigate } from "react-router-dom";
import {SearchAC} from '../Components/Accounts/SearchAC.js'
import ACSearchBar from '../Components/Accounts/ACSearchBar'


const ACSearchResults = (props) => {

  const {state} = useLocation(); //grabs inputted information
  const {passkeyword} = state;

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
     e.preventDefault();
     

    //C2. Send the object to express server via axios

    //C3. Direct to a different page
    navigate("/homepage/ACresults");
  };
  return (<div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Rutgers BazaaRU</p>
      <ACSearchBar></ACSearchBar>
      <SearchAC ac_KW = {passkeyword}></SearchAC>
      </header>
  
      </div>)
  
  };
  export default ACSearchResults;
