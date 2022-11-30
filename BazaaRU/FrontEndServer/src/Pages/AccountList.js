import logo from "./profile.png";
import Account from "../Components/Account";
import AccountDelete from "../Components/AccountDelete";
import Cookies from "js-cookie";
import AccountsList from "../Components/AccountList";

function AccountList() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>User Account Listing</p>
      </header>
      <AccountsList></AccountsList>
      <div></div>
    </div>
  );
}

export default AccountList;
