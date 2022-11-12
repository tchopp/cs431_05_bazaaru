import Cookies from "js-cookie";
import "./UpdateBalance.css";
import logo from "./profile.png"; //Need to replace image with project image
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const UpdateBalance = () => {
    const navigate = useNavigate();
    //Username holder
    const username = Cookies.get("userName");

    console.log("userId:", username);

    //Balance holder 
    const[balance, setBalance] = useState('');

    //What to do when someone hits the submit button 
    const handleSubmit = (e) => { 
        e.preventDefault();

        //Send info to backend
         axios.post('http://cs431-05.cs.rutgers.edu:5000/updateBalance',{ 
         userName: username,
         updateAmount: balance  })
       .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
   
       //C3. Make sure variables were captured
       console.log(balance);
       
       //C4. Direct to a different page
         navigate("/homepage", { state: { permID: 3 } });

     };

    return(
        <div className = "balanceUpdate"> 
        <h2>Update Your Balance Below</h2>
            <form onSubmit={handleSubmit}>
                {/*Only one input field to see how much they want to put in and the ability to submit*/}
                <label>How much money would you like to add to your account balance?</label>
                <input  
                    type= "number"
                    value = {balance}
                    onChange = {(e) => setBalance(e.target.value)}
                />

                <button>Submit</button>
            </form>
        </div>
        
         

    );
};
export default UpdateBalance;
