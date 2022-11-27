import React, { useEffect, useState }  from 'react';
import axios from "axios";
//needs username of writer 
//needs username of subject
const ReadReviews = (props) =>{
    //Get the name of the user whose reviews are being viewed 
    const reviewee = props.reviewee;
    console.log(reviewee)
    //use effect for a requests to get all reviews and put them in an object 
    const[review, setReviews] = useState();

    return(
      <div className='ReadR'>
        <h3>Reviews</h3>
        {/** List and map for everything
         */}
      </div>  
    )
}
export default ReadReviews;