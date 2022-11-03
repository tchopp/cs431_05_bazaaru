import ReactDOM from "react-dom";
import "./Account.css";
import axios from 'axios';

function Account(props) {
  //Given userID, returns the account information for that userID
  const userID = props.userID;
  const username = props.username;
  //console.log("userID: ", props);
  console.log("username: ", username);

  var permID = "";

  const reqData = { username: username };
  axios.post('http://cs431-05.cs.rutgers.edu:5000/accountRank', reqData).
    then( (response) => {
      console.log(response);
      permID = response.data.permID;
    });

  function returnString(string) {
    console.log('returnString: ', username);
    return string;
  }

  return (
    <div className="Style">
      {/*Account information will be gathered from back-end using the User ID passed to Account */}
      <p>Account Name: {returnString(username)}</p>
      <p>Account Registered: not yet implemented</p>
      <p>User Account: {returnString(permID)}</p>
    </div>
  );
}

export default Account;
