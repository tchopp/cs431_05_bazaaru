import React, { useEffect,useState } from 'react';
import './Post.css';
import axios from 'axios';


export const SearchPost = (props) => {
const [postData,setPostData] = useState({username: 'user', product: 'product' , image_url: 'https://trackmobile.com/wp-content/uploads/2021/04/photo-unavailable.png', price: -1, category: 'category', description: 'description'});


useEffect(()=>{axios.get('http://cs431-05.cs.rutgers.edu:5000/results/gutter').then((response) => {
    //const data = [];
    console.log(response.data[0]);
    setPostData({username: response.data[0][0].username, product: response.data[0][0].product, image_url: response.data[0][0].image_url, price: response.data[0][0].price, category: response.data[0][0].category, description: response.data[0][0].description});

    //setPosts(ids);
    //console.log(posts);
});},[props.post_id])

return (<ul>
            <li>{postData.username}</li>
            <li><img src={postData.image_url}/></li>
            <li>${postData.price}</li>
            <li>{postData.category}</li>
            <li>{postData.description}</li>
            <li>-------------------------------</li>
        </ul>);
};
