import logo from "./profile.png";
import Account from "../Components/Account";
//import AccountDelete from "../Components/AccountDelete";
import Cookies from "js-cookie";
import AccountsList from "../Components/AccountList";
import NavBar from "../Components/NavBar.jsx";

/**
 * The page that allows users to see a list of all accounts and calls on the Account List
 * component 
 * @returns A List of all accounts
 */
function AccountList() {
  return (
    <div className="App-list">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <NavBar></NavBar>
      <p>User Account Listing</p>
      <AccountsList></AccountsList>
    </div>
  );
}

export default AccountList;
