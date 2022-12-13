import Cookies from "js-cookie";
import React from "react";
import{ useState } from "react";
import "./UpdateBalance.css";
import logo from "./profile.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import NavBar from "../Components/NavBar.jsx"

const UpdateBalance = () => {
    const navigate = useNavigate();
    const username = Cookies.get("userName");
    console.log("userId:", username);
    const[balance, setBalance] = useState('');
    const handleSubmit = (e) => { 
        e.preventDefault();
         axios.post('http://cs431-05.cs.rutgers.edu:5000/updateBalance',{ 
         userName: username,
         updateAmount: balance  })
       .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
       console.log(balance);
       navigate("/homepage", { state: { permID: 3 } });

     };

    return(
      <div>
      <header className="App-header">
        <img src={logo} className="App-logo-home"  />
      </header>
      <div className="Nav-container">
      <NavBar></NavBar>
      </div>
        <div className = "balanceUpdate"> 
        <h2>Update Your Balance Below</h2>
            <form onSubmit={handleSubmit}>
                {/*Only one input field to see how much they want to put in and the ability to submit*/}
                <label>How much money would you like to add to your account balance?</label>
                <input  
                    type= "number"
                    value = {balance}
                    onChange = {(e) => setBalance(e.target.value)}
                />

                <button>Submit</button>
            </form>
        </div>
      </div>
         

    );
};
export default UpdateBalance;
