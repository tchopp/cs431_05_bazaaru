import ReactDOM from "react-dom";
import "./Account.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";

function Account() {
  const username = Cookies.get("userName");
  //console.log("username: ", username);

  const [permID, setPermID] = useState("");
  const reqData = { username: username };
  useEffect(() => {
    axios
      .post("http://cs431-05.cs.rutgers.edu:5000/accountRank", reqData)
      .then((response) => {
        //setLoading("false");
        setPermID(response.data.permID);
      });
  });

  function returnString(permID) {
    //console.log("permID: ", permID);
    if (permID == 1) {
      return "User";
    }
    if (permID == 2) {
      return "Moderator";
    }
    return "Administrator";
  }
  function returnBalance(username){
    axios.post("http://cs431-05.cs.rutgers.edu:5000/findBalance", {username: username})
    .then(function (response) {
      console.log(JSON.stringify(response.acc_balance));
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return "An error has occured, cannot load balance at this time";
    });
    
  }

  return (
    <div className="Style">
      {/*Gather user's account balance from backend */}
      <p>Account Name: {username}</p>
      <p>User Account: {returnString(permID)}</p>
      <p>Your Current Balance: {returnBalance(username)}</p>
    </div>
  );
}

export default Account;
