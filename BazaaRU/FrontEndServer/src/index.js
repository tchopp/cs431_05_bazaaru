import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./Pages/App";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import About from "./Pages/About";
import Catalog from "./Pages/Catalog";
import Results from "./Pages/searchResults";
import TestResults from "./Pages/searchResultsTest";
import CreatePost from "./Pages/CreatePost";

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
        <Route path="/homepage/results=Yousof" element={<TestResults />} />
        <Route path="/homepage/createpost" element={<CreatePost />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
