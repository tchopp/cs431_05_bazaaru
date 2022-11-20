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

  return (
    <ul>
      {accountsData.map((item) => (
        <li key={item.username}>
          <div>USERNAME: {item.username}</div>
          <div>RANK: {item.permID}</div>
          <div>---</div>
        </li>
      ))}
    </ul>
  );
};

export default AccountList;
