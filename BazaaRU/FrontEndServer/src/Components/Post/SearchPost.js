import React, { useEffect,useState } from 'react';
import './Post.css';

import  {Post} from '../Post/Post.js';
import axios from 'axios';


export const SearchPost = (props) => {
const [postData,setPostData] = useState({username: 'user', product: 'product' , image_url: 'https://trackmobile.com/wp-content/uploads/2021/04/photo-unavailable.png',
    price: -1, category: 'category', description: 'description'});

const [posts,setPosts] = useState([0,0]);


useEffect(()=>{axios.get('http://cs431-05.cs.rutgers.edu:5000/results/' + props.post_KW).then((response) => {
    //const data = [];
    const ids = [];
      for (let i = 0; i < response.data[0].length; i++) {
         ids.push(response.data[0][i].post_id);
      }
    console.log(ids);
    setPosts(ids);
    console.log(posts);
    console.log(response.data[0]);
    setPostData({username: response.data[0][0].username, product: response.data[0][0].product, image_url: response.data[0][0].image_url,
        price: response.data[0][0].price, category: response.data[0][0].category, description: response.data[0][0].description});

    //setPosts(ids);
    //console.log(posts);
});},[props.post_KW])

return (<ul>{posts.map(id => <li><Post post_id={id}/></li>)}</ul>);
};
