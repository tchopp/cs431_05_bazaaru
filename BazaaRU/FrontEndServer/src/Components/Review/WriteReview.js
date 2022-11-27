import React, { useEffect, useState }  from 'react';
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
//needs username of writer 
//needs username of subject
const WriteReview = () =>{
  function purchaseCheck(subjectUN, writerUN){
    return "success";
  }
    return(
      <div>
        <h1>Text box with a submit button goes here</h1>
        {/** We should be checking in transactions table to see if the person writing the review actually 
         * bought from who they are writing from. 
         * Can also check to see if the only did it once or more
         */}
      </div>  
    )
}
export default WriteReview;