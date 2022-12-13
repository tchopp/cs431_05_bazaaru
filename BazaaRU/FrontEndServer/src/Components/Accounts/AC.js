import React, { useEffect, useState } from "react";
import "./AC.css";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import Rating from "../Review/Rating";

/**
 * 
 * @param {*} props - which is the username of the person who is the possible subject of the search
 * @returns This will return a snippet to the user displaying the account and their rating.
 */
export const AC = (props) => {
  const [ACData, setACData] = useState({
    username: "user"
    });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://cs431-05.cs.rutgers.edu:5000/getAccount/" + props.ac_id)
      .then((response) => {
        console.log(response.data[0]);
        if (response.data[0].length !== 0) {
          setACData({
            username: response.data[0][0].username
          });
        }
      });
  }, [props.ac_id]);


const toACDetails = () => {
    navigate('/homepage/publicprofile/' + ACData.username);
}

return (<div className="Account"><ul onClick={toACDetails}>
            <li>{ACData.username}</li>
            <Rating reviewee = {ACData.username}></Rating>
        </ul>
        </div>);
};

