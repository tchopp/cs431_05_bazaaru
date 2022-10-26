import ReactDOM from "react-dom";
import "./Account.css";

function Account(props) {
  //Given userID, returns the account information for that userID
  const ID = props.userID;
  //console.log("userID: ", props);
  console.log("ID: ", ID);
  return (
    <div className="Style">
      {/*Account information will be gathered from back-end using the User ID passed to Account */}
      <p>Account Name: Thomas Hildenberg</p>
      <p>Account Registered: 10/10/2022</p>
      <p>User Account: Regular</p>
    </div>
  );
}

export default Account;
