import React, {useState} from 'react';
import { render } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const PostDetails = () => {
    const [buyable,setBuyable] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = ({target}) => {
      target.disabled = true;
      axios.post('http://cs431-05.cs.rutgers.edu:5000/check_currency',{username: Cookies.get('userName'), prod_price: location.state.postData.price}).then((response0) => {
        console.log(response0.data)
        if (response0.data.transaction_possible) {
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
                axios.post('http://cs431-05.cs.rutgers.edu:5000/prod_update_user_buy',{
                    post_id: location.state.post_id
                }).then(() => {
                    axios.post('http://cs431-05.cs.rutgers.edu:5000/currency_update_user_buy',{username: buyer_username, price: location.state.postData.price}).then(()=>{
                        axios.post('http://cs431-05.cs.rutgers.edu:5000/currency_update_seller_prodsold',{username: location.state.postData.username, update_amount: location.state.postData.price}).then(() => {navigate('/homepage/catalog');});
                    });
                });
            });
        });

        }

        else {
            setBuyable(false);
        }
        
      });
        

    }

    return (
    <div>
        {!buyable && <p>Do not have the funds.</p>}
    <ul>
        <li>{location.state.postData.username}</li>
        <li>{location.state.postData.product}</li>
        <li><img src={location.state.postData.image_url}/></li>
        <li>${location.state.postData.price}</li>
        <li>{location.state.postData.category}</li>
        <li>{location.state.postData.description}</li>
        <button onClick={handleClick}>Buy it</button>
    </ul>
    </div>);
}

export default PostDetails;
