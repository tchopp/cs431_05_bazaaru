import logo from "./profile.png"; //Need to replace image with project image
import "./App.css";
import LoginForm from "../Components/LoginForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to BazaaRU. Please sign in with your account below.</p>
      </header>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
