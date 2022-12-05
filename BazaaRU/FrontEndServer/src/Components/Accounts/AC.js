import React, { useEffect, useState } from "react";
import "./AC.css";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';

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

  function getRating(username) {
    // send in user name
    // get the number of reviews about the person
    // get what their current average is
    //(((current average * number of reviews) + new rating )/ number of reviews +1)
  }


const toACDetails = () => {
    navigate('/homepage/publicprofile/' + ACData.username);
}

return (<div className="Account"><ul onClick={toACDetails}>
            <li>{ACData.username}</li>
            <li>{ACData.rating}</li>
            <li>-------------------------------</li>
        </ul>
        </div>);
};

