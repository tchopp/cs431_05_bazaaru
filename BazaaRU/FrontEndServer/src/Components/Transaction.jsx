import React, { useState } from "react";
import ReactDOM from "react-dom";
import Cookies from "js-cookie";
import "./Transaction.css";

function Transaction(props) {
  const username = Cookies.get("userName");
  const styles = {
    fontSize: 20,
    marginRight: "20px",
  };
  const transactionID = props.transactionInformation.transactionID;
  const postID = props.transactionInformation.postID;
  const buyer_username = props.transactionInformation.buyer_username;
  const seller_username = props.transactionInformation.seller_username;
  const transaction_date = props.transactionInformation.transaction_date;
  //console.log("props", props);
  //   console.log("TransInfo", props.transactionInformation);
  //   console.log("TransID", props.transactionInformation.transactionID);

  return (
    <div className="items">
      <div className="transaction_item">
        <p>Transaction ID= {transactionID}</p>
        <p>Post ID = {postID}</p>
        <p>Buyer = {buyer_username}</p>
        <p>Seller = {seller_username}</p>
        <p>Transaction Date = {transaction_date}</p>
        {username === seller_username && (
          <button style={styles} onClick={props.onCancel(postID)}>
            Cancel Product
          </button>
        )}
        {/*You can choose what information you want passed to the method. 
        Just pass the arg of your choice and modify it on TransactionList.jsx. IE: props.onCancel(information) */}
        {username === buyer_username && (
          <button style={styles} onClick={props.onRefund}>
            Refund Product
          </button>
        )}
      </div>
    </div>
  );
}

export default Transaction;
