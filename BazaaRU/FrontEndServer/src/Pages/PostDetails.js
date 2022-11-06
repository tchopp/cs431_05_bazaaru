import React from 'react';
import { render } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const PostDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = () => {
        axios.get('http://cs431-05.cs.rutgers.edu:5000/transactionID').then((response) => {
            let transaction_id; 
            let buyer_username = Cookies.get('userName');
            let date_purchased = new Date().toISOString().slice(0, 19).replace('T', ' ');
            if (response.data[0].length === 0) {
                transaction_id = 1
            }
            else {
                transaction_id = response.data[0][0].ID + 1          
            }
            axios.post('http://cs431-05.cs.rutgers.edu:5000/buy',{
                transaction_id: transaction_id,
                post_id: location.state.post_id,
                buyer_username: buyer_username,
                seller_username: location.state.postData.username,
                date_purchased: date_purchased
            }).then(() => {
                axios.post('http://cs431-05.cs.rutgers.edu:5000/prod_update',{
                    post_id: location.state.post_id
                }).then(() => {
                    navigate('/homepage/catalog');
                });
            });
        });

    }

    return (<ul>
        <li>{location.state.postData.username}</li>
        <li>{location.state.postData.product}</li>
        <li><img src={location.state.postData.image_url}/></li>
        <li>${location.state.postData.price}</li>
        <li>{location.state.postData.category}</li>
        <li>{location.state.postData.description}</li>
        <button onClick={handleClick}>Buy it</button>
    </ul>);
}

export default PostDetails;