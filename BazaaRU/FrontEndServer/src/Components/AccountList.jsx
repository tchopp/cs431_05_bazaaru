import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import './AccountList.css';

/**
 * This is a component only available to admins and allows them to view and make changes to the users of the 
 * website.
 * @param {*} props permission ID
 * @returns A list of all users in the database and buttons to change their position in the databse
 */
export const AccountList = (props) => {
  const [accountsData, setAccountsData] = useState([
    { username: "default", permID: "1" },
  ]);

  useEffect(() => {
    axios
      .get("http://cs431-05.cs.rutgers.edu:5000/accountList")
      .then((response) => {
        console.log(response.data);
        setAccountsData(response.data);
      });
  });
  /**
   * Allows admin to delete an account form the database
   * @param {*} username 
   */
  function deleteUser(username) {
    const userInfo = { uName: username };
    axios
      .put("http://cs431-05.cs.rutgers.edu:5000/deleteAccount", userInfo);   
  }
  /**
   * Allows admin to promote an account in the database
   * @param {*} username 
   */
  function promoteUser(username) {
    const userInfo = { uName: username };
    axios
      .post("http://cs431-05.cs.rutgers.edu:5000/promoteAccount", userInfo);
  }
  /**
   * Allows admin to demote a user in the database
   * @param {*} username 
   */
  function demoteUser(username) {
    const userInfo = { uName: username };
    axios
      .post("http://cs431-05.cs.rutgers.edu:5000/demoteAccount", userInfo);
  }

  return (
    <div className="App-list2">
    <ul>
      {accountsData.map((item) => (
        <li key={item.username}>
          <div class="username">USERNAME: {item.username}</div>
          <div>RANK: {item.permID}</div>
          <button class="delete account" type="button" onClick={() => deleteUser(item.username)}>Delete user account</button>
	  <button class="promote" type="button" onClick={() => promoteUser(item.username)}>Promote user</button>
	  <button class="demote" type="button" onClick={() => demoteUser(item.username)}>Demote user</button>
	  <div>---</div>
	 </li>
      ))}
    </ul>
    </div>
  );
};

export default AccountList;
