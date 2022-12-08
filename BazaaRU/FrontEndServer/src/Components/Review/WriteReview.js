import React, { useState }  from 'react';
import axios from "axios";
import Cookies from 'js-cookie';

//needs username of writer 
//needs username of subject
const WriteReview = (props) =>{
  const reviewer = Cookies.get("userName");
  const reviewee = props.reviewee;

  //Review holder:
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  //Atempt to write a review on someone 
  const handleSubmit = (e) =>{
    axios
    //Outerpost
    .post("http://cs431-05.cs.rutgers.edu:5000/check_for_purchase",{
      writerUN: reviewer,
      subjectUN: reviewee
    })
    //Outerthen
    .then((response) => {
      console.log("In the purchase check function " + response.data.answer);
      if(response.data.answer){
        console.log("The answer we are getting from the DB is " + response.data.answer);
        console.log("The DB can cofirm that a purchase was made");
        axios
          //innerpost
          .post("http://cs431-05.cs.rutgers.edu:5000/make_review",{
            writerUN: reviewer,
            subjectUN: reviewee,
            review: review,
            rating: rating
          })
          //innerthen
          .then(function (response) {
            console.log(response);
            console.log("review has been sent");
          })
          //innercatch
          .catch(function (error) {
            console.log(error);
          });
      }
      else{
        console.log("There was no purchase made " + response.data.answer);
        return alert("Sorry! You can only write a review for someone you have purchased from. ");
      }
    })
    .catch(function (error) {
      console.log(error);
      return "An error has occured, cannot check for purchases at this time";
    });
  };

  
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
          min="1"
          max = "5"
          required
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button>Submit</button>

        </form>
      </div>  
    )
}
export default WriteReview;