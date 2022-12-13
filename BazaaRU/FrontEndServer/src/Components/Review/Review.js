import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import './Review.css';

/**
 * @param {*} props username
 * @returns Individual review component of a particular user to ReadReviews
 */
export const Review = (props) => {
  const [reviewData, setReviewData] = useState({
    writer: "",
    rating: "",
    actualReview:
      "There are no reviews yet!",
  });


  useEffect(() => {
    if (props.rid !== 0) {
      axios
        .get("http://localhost:5000/reviews/" + props.rid)
        .then((response) => {
          console.log(response.data[0]);
        
          setReviewData({
            writer: response.data[0][0].writer_usnm,
            rating: response.data[0][0].num_rating,
            actualReview: response.data[0][0].acc_review,
          });
      });
    }
      
  }, [props.rid]);


return (<div className="review">
            <li>{reviewData.writer}</li>
            <li>{reviewData.rating}</li>
            <li>{reviewData.actualReview}</li>
            <li>   </li>
        </div>);
};
export default Review;

