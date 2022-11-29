import React, { useEffect, useState } from "react";
//import "./Post.css";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';

export const Review = (props) => {
  const [reviewData, setReviewData] = useState({
    writer: "writer",
    rating: 5,
    actualReview:
      "This person has too many chickens, it is baffling.",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (props.rid !== 0) {
      axios
        .get("http://cs431-05.cs.rutgers.edu:5000/reviews/" + props.rid)
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
        </div>);
};
export default Review;
