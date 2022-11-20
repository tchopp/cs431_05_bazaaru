import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Transaction from "./Transaction";

function TransactionList() {
  const username = Cookies.get("userName");
  //transaction_id, post_id, buyer_username, seller_username, transaction_date
  const transactionInformation = {
    transactionID: 1,
    postID: 1,
    buyer_username: "ac1",
    seller_username: "test",
    transaction_date: "00/00/00",
  };
  const transactionInformation2 = {
    transactionID: 2,
    postID: 2,
    buyer_username: "N/A",
    seller_username: "ac1",
    transaction_date: "00/00/00",
  };
  //Axios call is needed to get the transactionID, postID, and other information from backend and displayed here
  //The above is a hard-coded example

  function cancelProduct(pID) {
    console.log("pressed");
    axios
      .post("http://cs431-05.cs.rutgers.edu:5000/transactionCancel/", {
        postID: pID,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function refundProduct(pID) {
    console.log("pressed");
    axios.post("http://cs431-05.cs.rutgers.edu:5000/transactionRefund", {
      postID: pID,
    });
  }

  return (
    <div className="app">
      <div className="transaction_item">
        {/*Replace hardcoded with list of transaction items.This can be done using map. 
        You can refer to component catalog.js or the accountlist chris made for reference. 
        Please use the transaction component as it is linked with the button.
        An example would be making an axios call and storing the information into a variable called transactionInformation.
        Then pass that information to each transaction componenent using map.
        */}
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
