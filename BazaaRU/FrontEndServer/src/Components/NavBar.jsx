import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

/**
 * Creates the visual representation of a navigation bar and allows for users to click to get to a 
 * particular page
 * @returns Multiple buttons in a formatted manner to redirect a user to desired page
 */
function NavBar() {

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
    function toAbout() {
        navigate("/homepage/about");
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
                    <li onClick={toAbout}>About</li>
                    <li onClick={toSignOut}>Sign Out</li>
                </ul>
            </nav>
        </div>
    );

}

export default NavBar;
