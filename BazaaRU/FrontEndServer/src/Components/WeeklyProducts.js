import React, {useEffect, useState} from 'react';
import  {Post} from './Post/Post.js';
import axios from "axios";
import Cookies from 'js-cookie';


export const CatalogWeekly = () => {

// 10 (-1) post_ids for first render
const [posts,setPosts] = useState([0]);



useEffect(()=>{axios.post('http://cs431-05.cs.rutgers.edu:5000/catalogweek',{username:Cookies.get('userName')}).then((response) => {
      const ids = [];
      for (let i = 0; i < response.data[0].length; i++) {
         ids.push(response.data[0][i].post_id);
      }
      console.log(ids);
      setPosts(ids);
      console.log(posts);
  });},[]);
        


     
    

 



return (<ul>{posts.map(id => <li key={id}><Post post_id={id}/></li>)}</ul>);
};