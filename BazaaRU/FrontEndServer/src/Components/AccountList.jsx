import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

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

  function deleteUser(username) {
    const userInfo = { uName: username };
    axios
      .put("http://cs431-05.cs.rutgers.edu:5000/deleteAccount", userInfo);   
  }

  function promoteUser(username) {
    const userInfo = { uName: username };
    axios
      .post("http://cs431-05.cs.rutgers.edu:5000/promoteAccount", userInfo);
  }

  function demoteUser(username) {
    const userInfo = { uName: username };
    axios
      .post("http://cs431-05.cs.rutgers.edu:5000/demoteAccount", userInfo);
  }

  return (
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
  );
};

export default AccountList;
