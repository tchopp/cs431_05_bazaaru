import logo from "./profile.png"; //Need to replace image with project image
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Account from "../Components/Account";
import Cookies from "js-cookie";

function Profile() {
  const navigate = useNavigate();
  const username = Cookies.get("userName");

  console.log("userId:", username);

  const styles = {
    fontSize: 20,
    marginRight: "20px",
  };
  function toPurchaseHistory() {
    navigate("/homepage/profile/transactions");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Account Profile</p>
      </header>
      <Account username={username}></Account>
      <button style={styles} onClick={toPurchaseHistory}>
        Purchase History
      </button>
    </div>
  );
}

export default Profile;
