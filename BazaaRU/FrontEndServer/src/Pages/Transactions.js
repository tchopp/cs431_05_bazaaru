import React from "react";
import logo from "./profile.png";
import "./Transactions.css";
import TransactionList from "../Components/TransactionList";
import Cookies from "js-cookie";

function Transactions() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" />
      </header>
      <TransactionList></TransactionList>
    </div>
  );
}

export default Transactions;
