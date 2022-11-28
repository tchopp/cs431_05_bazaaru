import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Transaction from "./Transaction";

export const TransactionList = (props) => {
  const [transactionData, setTransactionData] = useState([
    { transaction_id: "1", post_id: "1", buyer_username: "default", seller_username: "default", transaction_date: "00-00-00" },
  ]);
  const username = Cookies.get("userName");
  //transaction_id, post_id, buyer_username, seller_username, transaction_date
  
  useEffect(() => {
    axios
      .post("http://cs431-05.cs.rutgers.edu:5000/getTransactions", { uName: username })
      .then((response) => {
        console.log(response.data);
        setTransactionData(response.data);
    });
  });

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
        <ul>
	  {transactionData.map((item) => (
	    <li key={item.transaction_id}>
	      <Transaction transactionInformation={item} onCancel={cancelProduct} onRefund={refundProduct}></Transaction>
	    </li>
	  ))}
	</ul>
      </div>
    </div>
  );
}

export default TransactionList;
