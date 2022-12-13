import Cookies from "js-cookie";
import React from "react";
import pfp from "../img/frogpfp.jpg";
import { useParams } from "react-router-dom";
import WriteReviews from "../Components/Review/WriteReview";
import ReadReviews from "../Components/Review/ReadReviews";
import Rating from "../Components/Review/Rating";
import './PublicProfile.css';

const PublicProfile = () => {
  //1. Get username of subject to set up page
  const params = useParams();
  const subject = params.reviewee;
  console.log(subject);
  //2. Get username of writer
  const username = Cookies.get("userName");
  console.log(username);
  //3. Get subject's status
  //4. Get subject's current ranking


  return (
    <div className="publicProfilePage">
      <img
        src={pfp}
        className= "public_profile_pfp"
        alt="Default Profile Pic"
      ></img>
      <h2> Username: {subject} </h2>
      <h2>Status: This user has not set a status</h2>
      <Rating reviewee = {subject}></Rating>
      <li></li>
      <WriteReviews reviewee={subject}></WriteReviews>
      <li></li>
      <ReadReviews reviewee={subject}></ReadReviews>
    </div>
  );
};
export default PublicProfile;
