import ReactDOM from "react-dom";
import "./Account.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";

/**
 * This is the account component that allows a user to see their account information based on the information
 * in the database.
 * @returns Visual representation of a user's account
 */
function Account() {
  const username = Cookies.get("userName");
  //console.log("username: ", username);

  const [permID, setPermID] = useState("");
  const [balance, setBalance] = useState("");

  const reqData = { username: username };

  useEffect(() => {
    axios
      .post("http://cs431-05.cs.rutgers.edu:5000/accountRank", reqData)
      .then((response) => {
        //setLoading("false");
        setPermID(response.data.permID);
      });
  });

  useEffect(() => {
    console.log("making a request for balance")
    axios
      .post("http://cs431-05.cs.rutgers.edu:5000/findBalance", reqData)
      .then((response) => {
        setBalance(response.data.acc_balance);
        console.log(balance);
      }).catch(function (error) {
        console.log(error);
        return "An error has occured, cannot load balance at this time";
      });
  });
  /**
   * This function allows a user to see what kind of account they have
   * @param {*} permID  Permission ID of a user
   * @returns a string to reflect the type of user account someone has
   */
  function returnString(permID) {
    if (permID == 1) {
      return "User";
    }
    if (permID == 2) {
      return "Moderator";
    }
    return "Administrator";
  }



  return (
    <div className="Style">
      {/*Gather user's account balance from backend */}
      <p>Account Name: {username}</p>
      <p>User Account: {returnString(permID)}</p>
      <p>Your Current Balance: {balance}</p>
    </div>
  );
}

export default Account;
