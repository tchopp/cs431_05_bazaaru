import React, { useEffect, useState } from "react";
import "./Post.css";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';

export const Post = (props) => {
  const [postData, setPostData] = useState({
    username: "user",
    product: "product",
    image_url:
      "https://trackmobile.com/wp-content/uploads/2021/04/photo-unavailable.png",
    price: -1,
    category: "category",
    description:
      "A description of the product. Product is cool and fun and exciting and amazing.",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (props.post_id !== 0) {
      axios
        .get("http://cs431-05.cs.rutgers.edu:5000/catalog/" + props.post_id)
        .then((response) => {
        //const data = [];
          console.log(response.data[0]);
        
          setPostData({
            username: response.data[0][0].username,
            product: response.data[0][0].product,
            image_url: response.data[0][0].image_url,
            price: response.data[0][0].price,
            category: response.data[0][0].category,
            description: response.data[0][0].description,
          });
        

        //setPosts(ids);
        //console.log(posts);
      });
    }
      
  }, [props.post_id]);


const toPostDetails = () => {
    navigate('/homepage/postdets/'+props.post_id);
}

return (<ul onClick={toPostDetails}>
            <li>{postData.username}</li>
            <li>{postData.product}</li>
            <li><img src={postData.image_url}/></li>
            <li>${postData.price}</li>
            <li>{postData.category}</li>
            <li>{postData.description}</li>
            <li>-------------------------------</li>
        </ul>);
};

