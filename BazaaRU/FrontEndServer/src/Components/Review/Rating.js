import React, { useState, useEffect }  from 'react';
import axios from "axios";
import './Rating.css';

//needs username of subject
const Rating = (props) =>{
  
  console.log("In the rating component");

  //Get the name of the person who the review is on 
  const username = props.reviewee;
  console.log("We are trying to collecting ratings on " + username);
  const [rating, setrating] = useState("");

  //Useeffect to make axios call for the rating
  useEffect(() => {
    console.log("making a request for rating");
    axios
      .post("http://localhost:5000/findrating", {username: username})
      .then((response) => {
        setrating(response.data.rating);
        console.log(rating);
      }).catch(function (error) {
        console.log(error);
        return "An error has occured, cannot load rating at this time";
      });
  });

  if(rating == null){
    return(
      <div className='getRating'>
        <p1>This user does not have any ratings or reviews yet</p1>
      </div> 
    )
  }else{
    return(
      <div className='getRating'>
        <p1>This user's current rating is: {rating} / 5 </p1>
      </div>  
    )}
}
export default Rating;