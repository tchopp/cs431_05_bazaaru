import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';
import { useLocation, useParams } from 'react-router-dom';
import { Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const PostDetails = () => {
    const params = useParams();
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
    const [buyable,setBuyable] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = ({target}) => {
      target.disabled = true;
      axios.post('http://cs431-05.cs.rutgers.edu:5000/check_currency',{username: Cookies.get('userName'), prod_price:postData.price}).then((response0) => {
        console.log(response0.data)
        if (response0.data.transaction_possible) {
            axios.get('http://cs431-05.cs.rutgers.edu:5000/transactionID').then((response) => {
                console.log('hey1');
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
                post_id: params.post_id,
                buyer_username: buyer_username,
                seller_username: postData.username,
                date_purchased: date_purchased
            }).then(() => {
                console.log('hey2');
                axios.post('http://cs431-05.cs.rutgers.edu:5000/prod_update_user_buy',{
                    post_id: params.post_id
                }).then(() => {
                    console.log('hey3');
                    axios.post('http://cs431-05.cs.rutgers.edu:5000/currency_update_user_buy',{username: buyer_username, price: postData.price})
                    .then(()=>{
                        console.log('hey4');
                        axios.post('http://cs431-05.cs.rutgers.edu:5000/currency_update_seller_prodsold',{username: postData.username, update_amount: postData.price})
                        .then(() => {
                            console.log('hey5');
                            navigate('/homepage/catalog');
                        });
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

    useEffect(() => {
        axios
          .get("http://cs431-05.cs.rutgers.edu:5000/catalog/" + params.post_id)
          .then((response) => {
            //const data = [];
            console.log(response.data[0]);
            if (response.data[0].length !== 0) {
              setPostData({
                username: response.data[0][0].username,
                product: response.data[0][0].product,
                image_url: response.data[0][0].image_url,
                price: response.data[0][0].price,
                category: response.data[0][0].category,
                description: response.data[0][0].description,
              });
            }
    
            //setPosts(ids);
            //console.log(posts);
          });
      }, []);

    return (
    <div>
        {!buyable && <p>Do not have the funds.</p>}
    <ul>
        <li>{postData.username}</li>
        <li>{postData.product}</li>
        <li><img src={postData.image_url}/></li>
        <li>${postData.price}</li>
        <li>{postData.category}</li>
        <li>{postData.description}</li>
        {postData.price != -1 && <button onClick={handleClick}>Buy it</button>}
    </ul>
    </div>);
}

export default PostDetails;
