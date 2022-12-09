import logo from "./profile.png";
import Account from "../Components/Account";
//import AccountDelete from "../Components/AccountDelete";
import Cookies from "js-cookie";
import AccountsList from "../Components/AccountList";
import NavBar from "../Components/NavBar.jsx";

function AccountList() {
  return (
    <div className="App-list">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>User Account Listing</p>
      </header>
      <NavBar></NavBar>
      <AccountsList></AccountsList>
    </div>
  );
}

export default AccountList;
