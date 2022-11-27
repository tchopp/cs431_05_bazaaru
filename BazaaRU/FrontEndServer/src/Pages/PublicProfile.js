import Cookies from "js-cookie";
import React from "react";
import{ useState } from "react";
import logo from "./profile.png"; //Need to replace image with project image
import {useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import WriteReviews from "../Components/Review/WriteReview";
import ReadReviews from "../Components/Review/ReadReviews";

const PublicProfile = () => {
   //1. Get username of subject to set up page 
   const params = useParams();
   const subject = params.ACuser;
   console.log(subject);
   //2. Get username of writer
   const username = Cookies.get("userName");
   console.log(username);
   //3. Get subject's status 
   //4. Get subject's current ranking

return(
   <div className= "publicProfilePage">
        <img src = "../img/frogpfp.jpg" alt="Default Profile Pic" width="500"
        height="500"></img>
        <h2> Username: {username} </h2>
        <h2>Status: This user has not set a status</h2>
        <h2>Rating: This user has not yet been rated</h2>
        <WriteReviews reviewee = {subject}></WriteReviews>
        <ReadReviews reviewee = {subject}></ReadReviews>
   </div>
);
}
export default PublicProfile;