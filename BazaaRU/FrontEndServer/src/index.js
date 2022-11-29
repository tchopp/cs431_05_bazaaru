import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./Pages/App";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import About from "./Pages/About";
import Catalog from "./Components/Catalog/Catalog";
import Results from "./Pages/searchResults";
import ACResults from "./Pages/ACSearchResults";
import Profile from "./Pages/Profile";
import AccountList from "./Pages/AccountList";
import CreatePost from "./Pages/CreatePost";
import PostDetails from "./Pages/PostDetails";
import PurchaseHistory from "./Pages/Transactions";
import UpdateBalance from "./Pages/UpdateBalance";
import Complaint from "./Pages/Complaint";
import UserContacts from "./Pages/UserContacts";
import Messages from "./Components/Messages";
import PublicProfile from "./Pages/PublicProfile";
import ProfileTest from "./Pages/ProfileTest";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/homepage/about" element={<About />} />
        <Route path="/homepage/catalog" element={<Catalog />} />
        <Route path="/homepage/results" element={<Results />} />
        <Route path="/homepage/ACresults" element={<ACResults />} />
        <Route path="/homepage/profile" element={<Profile />} />
        <Route path="/homepage/profile/profiletest" element={<ProfileTest />} />
        <Route
          path="/homepage/profile/transactions"
          element={<PurchaseHistory />}
        />
        <Route
          path="/homepage/profile/updatebalance"
          element={<UpdateBalance />}
        />
        <Route path="/homepage/accountList" element={<AccountList />} />
        <Route path="/homepage/createpost" element={<CreatePost />} />

        <Route path="/homepage/postdets/:post_id" element={<PostDetails />} />
        <Route path="/homepage/publicprofile/:reviewee" element={<PublicProfile />} />
        <Route path="/homepage/contact" element={<Complaint />} />
        <Route path="/homepage/userContacts" element={<UserContacts />} />
        <Route path="/homepage/messages" element={<Messages />} />

      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
