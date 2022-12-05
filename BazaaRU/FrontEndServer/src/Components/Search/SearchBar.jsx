import React from "react";//import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import "./SearchBar.css";
function SearchBar() {
const navigate = useNavigate();
const handleSubmit = (event) => {
    event.preventDefault();
    var { keyword } = document.forms[0];
    var keywordValue = keyword.value;
    console.log(keywordValue);
    navigate("/homepage/results", { state: { passkeyword: keywordValue } });
};
const renderForm = (
<div className="form">
    <form onSubmit={handleSubmit}>
        <div className="input-container">
            <input type="text" name="keyword" required />
        </div>
        <div className="button-container">
            <input type="submit" />
        </div>
    </form>
</div>
);
return (
<div className="app">
    <div className="search-form">
        {renderForm}
    </div>
</div>
);}
export default SearchBar;
