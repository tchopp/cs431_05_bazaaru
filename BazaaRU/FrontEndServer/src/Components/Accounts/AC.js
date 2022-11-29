import React, { useEffect, useState } from "react";
import "./AC.css";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';

export const AC = (props) => {
  const [ACData, setACData] = useState({
    username: "user",
    //rating: 0,
    });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://cs431-05.cs.rutgers.edu:5000/getAccount/" + props.ac_id)
      .then((response) => {
        console.log(response.data[0]);
        if (response.data[0].length !== 0) {
          setACData({
            username: response.data[0][0].username,
            //rating: response.data[0][0].rating,
          });
        }
      });
  }, [props.ac_id]);


const toACDetails = () => {
    navigate('/homepage/ACdets/'+ACData.username);
}

return (<div className="Account"><ul onClick={toACDetails}>
            <li>{ACData.username}</li>
            <li>{ACData.rating}</li>
            <li>-------------------------------</li>
        </ul>
        </div>);
};
