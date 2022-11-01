//Using JSX
//1. Have input text boxes
//2. Have an item for the values to be stored
//3. Create an object to be sent 
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./CreatePost.css";
import{ useState } from "react";
import axios from 'axios';


const Post = () => {
//A. Create container to hold info for each part of the post:
  //A1: extract user id 
  // const {userID}  =  useLocation(); 
  // console.log("userid is: ", userID);

  //A2: Title holder: 
  const[title, setTitle] = useState('');
  
  //A3: Description holder: 
  const[description, setDescription] = useState('');

  //A4: Price holder: 
  const[price, setPrice] = useState('');

  //A5: Type holder: 
  const[type, setType]= useState('Miscellaneous');

//B. Allow for the page to be navigated elsewhere upon submission
  const navigate = useNavigate(); //To be able to move on to the next page once everything is submitted.

//C. Handle the events that take place once a submission has been made
  const handleSubmit = (e) => { //What to do when someone hits the submit button 
     e.preventDefault();
    //C1. Set up an object to be sent 

      //C1.1 if the value of type is not one of the types send an error to the user
        // if(type != 'misc' || type != 'shoes' || type != 'accessories' ||
        //  type != 'clothing' || type != 'service' || type != 'household')
  
    //C2. Send the object to express server via axios
      axios.post('http://cs431-05.cs.rutgers.edu:5005/createPost',{ 
      postTitle: title, 
      postDescription: description,
      postPrice: price, 
      postType: type})
      //postUserID: userID  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    //C3. Make sure variables were captured
    console.log(price);
    console.log(title);
    console.log(description);
    console.log(type);

    //C4. Direct to a different page
      navigate("/homepage", { state: { permID: 3 } });
      return <p1>You have sucessfully created a post!</p1>;
  };


  return (
    <div className="postInformation">
      <h2>Fill out the information below to create a post. </h2>
      <form onSubmit={handleSubmit}>

        <label>Post Title</label>
        <input 
          type="text" 
          required 
          value = {title}
          onChange= {(e) => setTitle(e.target.value)}
        />

        <label>Post Description</label>
        <textarea 
          required
          value={description}
          onChange = {(e) => setDescription(e.target.value)}
        ></textarea>

        <label>Price</label>
        <input 
          type="number" 
          required 
          value = {price}
          onChange= {(e) => setPrice(e.target.value)}
        />

        <label>Product Type</label>
        <select
          value= {type}
          onChange= {(e) => setType(e.target.value)}
        >
          <option value="accessories">Accessories</option>
          <option value="clothing">Clothing</option>
          <option value="service">Service</option>
          <option value="household">Household Items</option>
          <option value="shoes">Shoes</option>
          <option value="misc">Miscellaneous</option>
        </select>

        <button>Submit</button>
      </form>
    </div>
  );
};
export default Post;
