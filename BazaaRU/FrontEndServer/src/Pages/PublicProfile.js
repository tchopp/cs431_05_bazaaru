import Cookies from "js-cookie";
import React from "react";
import{ useState } from "react";
import logo from "./profile.png"; //Need to replace image with project image
import {useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import WriteReview from "../Components/Review/WriteReview";


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
        <img src = "cs431_05_frontend\BazaaRU\FrontEndServer\src\img\frogpfp.jpg" alt="Default Profile Pic" width="500"
        height="500"></img>
        <h2> Username: {username} </h2>
        <h2>Status: </h2>
        <h2>Rating:</h2>
        <WriteReview reviewee = {subject}></WriteReview>
        <ReadReviews reviewee = {subject}></ReadReviews>
   </div>
);
}
export default PublicProfile;