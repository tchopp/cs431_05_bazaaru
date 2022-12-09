import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {

    //need to implement search bar still, will leave searchbar component until 
    //that is complete. 

    //need to update post and account page

    const navigate = useNavigate();
    function toHomepage() {
        navigate("/homepage");
    }
    function toCatalog() {
        navigate("/homepage/catalog");
    }
    function toMessages() {
        navigate("/homepage/messages");
    }
    function toCreatePost() {
        navigate("/homepage/createpost");
    }
    function toAccount() {
        navigate("/homepage/profile");
    }
    function toSignOut() {
        navigate("/");
    }
    
    return (
        <div class="nav-container">
            <nav>
                <ul>
                    <li onClick={toHomepage}>Homepage</li>
                    <li onClick={toCatalog}>Catalog</li>
                    <li onClick={toMessages}>Messages</li>
                    <li onClick={toCreatePost}>Create Post</li>
                    <li onClick={toAccount}>Account</li>
                    <li onClick={toSignOut}>Sign Out</li>
                </ul>
            </nav>
        </div>
    );

}

export default NavBar;
