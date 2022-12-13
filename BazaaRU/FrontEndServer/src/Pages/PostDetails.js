import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';
import { useLocation, useParams } from 'react-router-dom';
import { Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import './PostDetails.css';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Card } from '@mui/material';
/**
 * Shows the page for the details of any individual post
 * @returns visual representation of what a post is in the DB
 */
const PostDetails = () => {
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);
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
    const [purchased, setPurchased] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = ({target}) => {
      target.disabled = true;
      const buyer_username = Cookies.get('userName');
      const date_purchased = new Date().toISOString().slice(0, 19).replace('T', ' ');
      axios.post('http://cs431-05.cs.rutgers.edu:5000/buy',{
                post_id: parseInt(params.post_id),
                price: postData.price,
                buyer_username: buyer_username,
                seller_username: postData.username,
                date_purchased: date_purchased
            }).then((response) => {
              console.log(response.data);
              if (response.data === 'no-money') {
                setBuyable(false);
              }
              else {
              setPurchased(true);
              setTimeout(()=>{navigate('/homepage/catalog');},2000);
                }
            });
        

        

       
     
        
        
      
        

    }

    useEffect(() => {
      if (params.post_id !== 0) {
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
              setIsLoading(false);
            }
    
            //setPosts(ids);
            //console.log(posts);
          });
        }
      }, []);

    return (
      <div>
      {!isLoading && <div className='postdets'>
        {purchased && <p>Purchase successful! Redirecting you back to the Catalog...</p>}
        {!buyable && <p>Do not have the funds.</p>}
    <Card>
    <ul>
        <li>{postData.username}</li>
        <li>{postData.product}</li>
        <li><img src={postData.image_url}/></li>
        <li>${postData.price}</li>
        <li>{postData.category}</li>
        <li>{postData.description}</li>
        {postData.price != -1 && <button onClick={handleClick}>Buy it</button>}
    </ul>
    </Card>
    </div>}
    {isLoading && <Stack spacing={1}>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>}
    </div>);
}

export default PostDetails;
