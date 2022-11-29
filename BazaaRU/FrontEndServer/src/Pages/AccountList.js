import logo from "./profile.png"; //Need to replace image with project image
import Account from "../Components/Account";
import AccountDelete from "../Components/AccountDelete";
import Cookies from "js-cookie";
import AccountsList from "../Components/AccountList";

//This is the default view/ Login page to get into the actual BazaaRU Homepage
function AccountList() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>User Account Listing</p>
      </header>
      {/*Create function to list all accounts in the sql database ******************************/}
      <AccountsList></AccountsList>
      <div></div>
    </div>
  );
}

export default AccountList;
