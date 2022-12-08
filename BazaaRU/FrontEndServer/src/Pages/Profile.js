import logo from "./profile.png";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Account from "../Components/Account";
import PasswordChange from "../Components/PasswordChange";

function Profile() {
  const navigate = useNavigate();
  const styles = {
    fontSize: 20,
    marginRight: "20px",
  };
  function toPurchaseHistory() {
    navigate("/homepage/profile/transactions");
  }
  function toAddBalance() {
    navigate("/homepage/profile/updatebalance");
  }
  function toProfileTest() {
    navigate("/homepage/profile/profiletest");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Account Profile</p>
      </header>
      <Account></Account>
      <button style={styles} onClick={toPurchaseHistory}>
        Purchase History
      </button>
      <button style={styles} onClick={toAddBalance}>
        Update Account Balance
      </button>
      <button style={styles} onClick={toProfileTest}>
        Search Profile
      </button>
      <PasswordChange></PasswordChange>
    </div>
  );
}

export default Profile;
