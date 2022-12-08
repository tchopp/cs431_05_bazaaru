import React, { useEffect,useState } from 'react';
import './AC.css';

import {AC} from '../Accounts/AC.js';
import axios from 'axios';


export const SearchAC = (props) => {
const [ACData, setACData] = useState({username: 'user', 
});

const [Account,setAccount] = useState([0,0]);


useEffect(()=>{axios.get('http://cs431-05.cs.rutgers.edu:5000/ACresults/' + props.ac_KW).then((response) => {
    const ids = [];
      for (let i = 0; i < response.data[0].length; i++) {
         ids.push(response.data[0][i].userID);
      }
    console.log(ids);
    setAccount(ids);
    console.log(Account);
    console.log(response.data[0]);
    setACData({username: response.data[0][0].username
});

});},[props.ac_KW])

return (<ul>{Account.map(id => <li><AC ac_id={id}/></li>)}</ul>);
};
