import React from "react";
import logo from "./profile.png"; //Need to replace image with project image
import "./Transactions.css";
import TransactionList from "../Components/TransactionList";
import Cookies from "js-cookie";

function Transactions() {
  //const username = Cookies.get("userName");
  //   console.log("userId:", username);
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Purchase History</p>
      </header>
      <TransactionList></TransactionList>
    </div>
  );
}

export default Transactions;
