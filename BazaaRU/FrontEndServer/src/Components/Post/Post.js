import React, { useEffect, useState } from "react";
import "./Post.css";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box, Card, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

export const Post = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState({});
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
          setIsLoading(false);
          

        //setPosts(ids);
        //console.log(posts);
      });
    }
      
  }, [props.post_id]);



return (
  <div>
  {!isLoading && <Link href={"/homepage/postdets/"+props.post_id} underline="none"><Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
       
      
        
        <StyledProductImg alt={postData.product} src={postData.image_url} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
      <Typography variant="subtitle2" noWrap>
            {postData.username}
          </Typography>

          <Typography variant="subtitle2" noWrap>
            {postData.product}
          </Typography>
       

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">
            ${postData.price}
          </Typography>
        </Stack>
      </Stack>
    </Card></Link>}
{isLoading && <Stack spacing={1}>

      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>}
</div>);
};

