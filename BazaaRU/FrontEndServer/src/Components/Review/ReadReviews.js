import React, { useEffect, useState }  from 'react';
import axios from "axios";
import { Review } from "../Review/Review.js";

/**
 * @param {*} props username of subject
 * @returns Returns a grid of all review components assicated with a username
 */
const ReadReviews = (props) =>{
    const reviewee = props.reviewee;
    console.log(reviewee);
    const[review, setReviews] = useState([0]);
    const [isEmpty, setIsEmpty] = useState(false);
    
    useEffect(() => {
      axios
        .post('http://cs431-05.cs.rutgers.edu:5000/get_reviews',{username:reviewee})
        .then((response) => {
          console.log('making axios call to get all the reviews for this user');
          if (response.data[0].length === 0) {
            setIsEmpty(true);
          }
          const ids = [];
          for (let i = 0; i < response.data[0].length; i++) {
            ids.push(response.data[0][i].rid);
          }
          console.log(ids);
          setReviews(ids);
          console.log(review);
        });
    }, []);

    return(
      <div>
        {isEmpty && <p>Sorry, looks like there are no reviews </p>}
          <ul>
            {review.map((id) => (
              <li key={id}>
                <Review rid={id} />
              </li>
              ))}
          </ul>
      </div>
    );
}
export default ReadReviews;