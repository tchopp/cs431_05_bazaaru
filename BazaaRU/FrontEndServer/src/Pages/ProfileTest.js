import Cookies from "js-cookie";
import React from "react";
import{ useState } from "react";
import "./UpdateBalance.css";
import { useNavigate } from "react-router-dom";

//Un tiempo mas
const ProfileTest = () => {
    const navigate = useNavigate();
    const username = Cookies.get("userName");
    console.log("The person trying to search for profiles is:", username);

    //Balance holder 
    const[reviewee, setReviewee] = useState('');

    //What to do when someone hits the submit button 
    const handleSubmit = (e) => { 
        e.preventDefault();

       //C3. Make sure variables were captured
       console.log(reviewee);
       
       //C4. Direct to a different page
         navigate("/homepage/publicprofile/"+reviewee);

     };

    return(
        <div className = "balanceUpdate"> 
        <h2>Search Profiles Below</h2>
            <form onSubmit={handleSubmit}>
                {/*Only one input field to see how much they want to put in and the ability to submit*/}
                <label>Who's profile do you want to search?</label>
                <input  
                    type= "text"
                    value = {reviewee}
                    onChange = {(e) => setReviewee(e.target.value)}
                />

                <button>Submit</button>
            </form>
        </div>
        
         

    );
};
export default ProfileTest;
