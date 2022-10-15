import React from 'react';
import './Post.css';



export const Post = (props) => {
    

return (<ul>
            <li>Username: {props.postData.username}</li>
            <li>Product/Service: {props.postData.prod_name}</li>
            <li><img src={props.postData.prod_image}/></li>
            <li>Price: ${props.postData.prod_price}</li>
            <li>Category: {props.postData.prod_category}</li>
            <li>Description: {props.postData.prod_desc}</li>
            <li>-------------------------------</li>
        </ul>);
};

