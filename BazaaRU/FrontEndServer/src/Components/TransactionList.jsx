import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Transaction from "./Transaction";

function TransactionList() {
  const username = Cookies.get("userName");
  //transaction_id, post_id, buyer_username, seller_username, transaction_date
  const transactionID = 0;
  const postID = 0;
  const buyer_username = "ac1";
  const seller_username = "test";
  const transaction_date = "00/00/00";
  const transactionInformation = {
    transactionID: transactionID,
    postID: postID,
    buyer_username: buyer_username,
    seller_username: seller_username,
    transaction_date: transaction_date,
  };
  const transactionInformation2 = {
    transactionID: 2,
    postID: 13,
    buyer_username: "N/A",
    seller_username: "ac1",
    transaction_date: transaction_date,
  };
  //Axios call is needed to get the transactionID, postID, and other information from backend and displayed here
  //The above is a hard-coded example

  function cancelProduct(pID) {
    //If user put a product up and wishes to cancel it
    //Remove Item from catalog appropriately
    //Update transaction state appropriately (Probably just remove product from catalog as it appears transaction is only created for purchased products.
    //Aka query from product catalog
    //console.log("pressed");
    axios.post('http://cs431-05.cs.rutgers.edu:5000/transactionCancel/',{ 
      postID: pID  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function refundProduct() {
    //If user bought a product and wishes to refund
    //Refund buyer the price of product. Move the product back to catalog.
    //Update transaction state appropriately
    //console.log("pressed");
  }
  return (
    <div className="app">
      <div className="transaction_item">
        {/*Replace hardcoded with list of transaction items.This can be done using map. You can refer to component catalog.js or the accountlist chris made for reference. Please use the transaction component as it is linked with the button.*/}
        <Transaction
          transactionInformation={transactionInformation}
          onCancel={cancelProduct}
          onRefund={refundProduct}
        ></Transaction>
        <Transaction
          transactionInformation={transactionInformation2}
          onCancel={cancelProduct}
          onRefund={refundProduct}
        ></Transaction>
      </div>
    </div>
  );
}

export default TransactionList;
