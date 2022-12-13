import React, { useEffect, useState } from "react";
import { Post } from "../Post/Post.js";
import axios from "axios";
import './Catalog.css'
import Cookies from "js-cookie";
import { Grid, Typography } from '@mui/material';
import NavBar from "../NavBar.jsx";
import logo from "../../Pages/profile.png";

/**
 * 
 * @returns This will visually return the catalog for the user to be able to view all posts in a grid setting
 */
export const Catalog = () => {
  const [posts, setPosts] = useState([0]);
  const [isEmpty, setIsEmpty] = useState(false);
    useEffect(() => {
    axios
      .post('http://cs431-05.cs.rutgers.edu:5000/catalog',{username:Cookies.get('userName')})
      .then((response) => {
        console.log('axios call too');
        if (response.data[0].length === 0) {
          setIsEmpty(true);
        }
        const ids = [];
        for (let i = 0; i < response.data[0].length; i++) {
          ids.push(response.data[0][i].post_id);
        }
        console.log(ids);
        setPosts(ids);
        console.log(posts);
      });
  }, []);

  return (
    <div>

    <img src={logo} className="App-logo" alt="logo" />
    <NavBar></NavBar>
    
    <Typography variant="h3">Products</Typography>
   
      <div>{isEmpty && <p>Sorry, looks like there are no results</p>}</div>
    
   <div><Grid container spacing={3} >
      {posts.map((id) => (
        <Grid key={id} item xs={12} sm={6} md={3}>
          <Post post_id={id} />
        </Grid>
      ))}
    </Grid></div>

    
    </div>
  );
};
export default Catalog;
