import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Transaction from "./Transaction";
import NavBar from "./NavBar.jsx";
/**
 * Allows user to see all their transactions with ability to cancel and refund products
 * @param {*} props Transaction information
 * @returns A list of transactions related to the user and buttons to make changes
 */
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
	/**
   * Allows user to cancel a product they are buying
   * @param {*} pID Post ID
   */
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
  /**
   * Allows user to refund the money for a product they are selling
   * @param {*} pID post ID
   */
  function refundProduct(pID) {
    console.log("pressed");
    axios.post("http://cs431-05.cs.rutgers.edu:5000/transactionRefund", {
      postID: pID,
    });
  }

  return (
    <div className="app-transactions">
      <NavBar></NavBar>
      <div className="transaction_item">
        <p>Purchase History</p>
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
