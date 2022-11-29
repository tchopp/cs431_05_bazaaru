import React, { useEffect, useState }  from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
//needs username of writer 
//needs username of subject
const WriteReview = (props) =>{
  const reviewer = Cookies.get("userName");
  const reviewee = props.reviewee;

  //Review holder:
  const [review, setReview] = useState("");

  //Rating holder:
  const [rating, setRating] = useState("");

  //Atempt to write a review on someone 
  const handleSubmit = (e) =>{
    e.preventDefault();
    const isPurchase = purchaseCheck(reviewee, reviewer);
    if (isPurchase = true){
      axios
      .post("http://cs431-05.cs.rutgers.edu:5000/make_review",{
      writerUN: reviewer,
      subjectUN: reviewee,
      review: review,
      rating: rating
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      return ("An error has occured, cannot check for purchases at this time");
    });
    }
    else{
      return ("You are unable to write a review");
      //let user know they have not made a purchase 
      //cannot review
    }
  };

  /*1. Check to see if it is possible to make a review triggered by the click submit 
  This function will go ahead and check if a user has made a purchase with a buyer before being able to write a 
  review, if true, it will post the */
  function purchaseCheck(subjectUN, writerUN){
    axios
    .post("http://cs431-05.cs.rutgers.edu:5000/check_for_purchase",{
      writerUN: reviewer,
      subjectUN: reviewee
    })
    .then(function (response) {
      console.log(response);
      if(response.data.answer == true){
        return true;
      }else{return false;}
    })
    .catch(function (error) {
      console.log(error);
      return "An error has occured, cannot check for purchases at this time";
    });
    return true;
  }

  
    return(
      <div className='writeRev'>
        <form onSubmit={handleSubmit}>
        {/** We should be checking in transactions table to see if the person writing the review actually 
         * bought from who they are writing from. 
         * Can also check to see if the only did it once or more
         */}

        <label>Please write your review below</label>
        <textarea
          required
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>

        <label>Rating</label>
        <input
          type="number"
          min="0"
          max = "5"
          required
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        </form>
      </div>  
    )
}
export default WriteReview;