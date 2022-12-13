import React from 'react';
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "./profile.png";
import { useNavigate } from "react-router-dom";
import {SearchPost} from '../Components/Post/SearchPost.js'
import {SearchAC} from '../Components/Accounts/SearchAC.js'
import SearchBar from '../Components/Search/SearchBar'
import NavBar from '../Components/NavBar'
import { Container } from '@mui/system';


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
      <NavBar></NavBar>
      <SearchBar></SearchBar>
      <SearchAC ac_KW = {passkeyword}></SearchAC>
      <Container maxWidth={'xs'} maxHeight={'xs'} spacing={30} gap={30}>
      <SearchPost post_KW = {passkeyword}></SearchPost>
      </Container>
      </header>
  
      </div>
    )  
  };
  export default SearchResults;
