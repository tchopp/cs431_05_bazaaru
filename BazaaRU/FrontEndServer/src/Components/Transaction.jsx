import React, { useState } from "react";
import ReactDOM from "react-dom";
import Cookies from "js-cookie";
import "./Transaction.css";
/**
 * Provides visual information to the front end about any given transaction in the DB
 * @param {*} props Information of a given transaaction including the seller's and buyer's username
 * the transaction and post ID
 * @returns Information about any individual transaction to the Transaction list component
 */
function Transaction(props) {
  const username = Cookies.get("userName");
  const styles = {
    fontSize: 20,
    marginRight: "20px",
  };
  const transactionID = props.transactionInformation.transaction_id;
  const postID = props.transactionInformation.post_id;
  const buyer_username = props.transactionInformation.buyer_username;
  const seller_username = props.transactionInformation.seller_username;
  const transaction_date = props.transactionInformation.date_purchased;


  return (
    <div className="items">
      <div className="transaction_item">
        <p>Transaction ID= {transactionID}</p>
        <p>Post ID = {postID}</p>
        <p>Buyer = {buyer_username}</p>
        <p>Seller = {seller_username}</p>
        <p>Transaction Date = {transaction_date}</p>
        {username === seller_username && (
          <button style={styles} onClick={() => props.onCancel(postID)}>
            Cancel Product
          </button>
        )}
        {/*You can choose what information you want passed to the method. 
        Just pass the arg of your choice and modify it on TransactionList.jsx. IE: props.onCancel(information) */}
        {username === buyer_username && (
          <button style={styles} onClick={() => props.onRefund(postID)}>
            Refund Product
          </button>
        )}
      </div>
    </div>
  );
}

export default Transaction;
