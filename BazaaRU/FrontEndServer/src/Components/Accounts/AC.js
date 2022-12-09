import React, { useEffect, useState } from "react";
import "./AC.css";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import Rating from "../Review/Rating";

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

