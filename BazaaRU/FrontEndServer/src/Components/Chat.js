import { Box, Typography, Paper, Divider, Grid, List, ListItem, ListItemText, FormControl, TextField, IconButton, Stack, Link, ListItemButton } from "@mui/material";
import { Container } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
import "./Chat.css";
import SendIcon from '@mui/icons-material/Send';
import CreateIcon from '@mui/icons-material/Create';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Cookies from 'js-cookie';
import axios from 'axios';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';


/**
 * Creates the entire chat feature of the website.
 * @returns UI for the chate feature
 */

export function Chat() {
    const user = Cookies.get('userName');
    const [users, setUsers] = useState([]);
    const [value,setValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [open, setOpen] = useState(false);
    // chat users and message ids for each chat
    const[chatUsers,setChatUsers] = useState([]);
    // chat messages that show up on screen when chat with a person is selected
    const [chatMessages, setChatMessages] = useState([]);
    // id of the message thread currently hilighted
    const [messageThread,setMessageThread] = useState(-1);
    // value of the text placed in text box for chat
    const [message, setMessage] = useState("");
    // lists all the chat messages are gotten from DB
    const listChatMessages = chatMessages.map((mes_obj, index) => 
        <ListItem key={index}>
            <ListItemText primary={`${mes_obj.user}: ${mes_obj.message}`}/>
        </ListItem>
    
    );
    // what we need to do 
    // 1. list of users on the chat side
    const listChatUsers = chatUsers.map((userData, index) => 
       <ListItem key={index}>
        <ListItemButton onClick={()=>{
            setMessageThread(userData.id);
            axios.post('http://cs431-05.cs.rutgers.edu:5000/chatthread',{id: userData.id})
            .then((response)=>{
                setChatMessages(response.data);
            })
        }} selected={userData.id === messageThread} key={index}>
        

            <ListItemText primary={`${userData.username}`} />
            
       
        </ListItemButton>
        <IconButton onClick={()=>{
                console.log(chatUsers.length);
                if (chatUsers.length === 1) {
                    console.log(true);
                    setMessageThread(-1);
                    
                    setChatUsers([]);
                    
                    console.log(chatMessages)
                    setChatMessages([]);
                }
                else {
                    setChatUsers(chatUsers.filter(a=>a.id!==userData.id));
                    if (index === chatUsers.length - 1) {
                        setMessageThread(chatUsers[index-1].id);
                        axios.post('http://cs431-05.cs.rutgers.edu:5000/chatthread',{id: chatUsers[index-1].id})
                        .then((response)=>{
                            setChatMessages(response.data);
                        })
                    }
                    else {
                        setMessageThread(chatUsers[index+1].id);
                        axios.post('http://cs431-05.cs.rutgers.edu:5000/chatthread',{id: chatUsers[index+1].id})
                        .then((response)=>{
                            setChatMessages(response.data);
                        })
                
                    }

                }
                axios.post('http://cs431-05.cs.rutgers.edu:5000/delmessage', {id: chatUsers[index].id});
            }}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    
    );
    

    
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleSubmit = () => {
        setOpen(false);

        let usernames = [];
        let ids = [];
        for (let i = 0; i < chatUsers.length; i++) {
            usernames.push(chatUsers[i].username);
            ids.push(chatUsers[i].id);
        }
        if (usernames.includes(value)) {
            axios.post('http://cs431-05.cs.rutgers.edu:5000/chatthread',{id: ids[usernames.indexOf(value)]})
            .then((response2)=>{
            setMessageThread(ids[usernames.indexOf(value)]);
            setChatMessages(response2.data);
            setInputValue('');
            setValue('');
        });
        }
        else {
            axios.post("http://cs431-05.cs.rutgers.edu:5000/newmessage",{sender: user, reciever: value})
            .then((response)=>{
                setMessageThread(response.data.message_id);
                setChatUsers([...chatUsers, {id: response.data.message_id, username: value}]);
                setChatMessages([]);
                setInputValue('');
            setValue('');
            });
        }
            
        
        
      };

    const handleChange = ({target}) => {
        setMessage(target.value);
    }
    const sendMessage = () => {
        if (message) {
            axios.post('http://cs431-05.cs.rutgers.edu:5000/sendmessage',{id: messageThread, sender: user, time_sent: new Date().toISOString().slice(0, 19).replace('T', ' '), message: message})
            .then(()=>{
                setChatMessages([...chatMessages, {user: user, message: message}]);
            });
        }
        setMessage('');
    }


    const prevThread = () => {
        
        for (let i = 0 ; i < chatUsers.length; i++) {
            if (chatUsers[i].id === messageThread) {
                setMessageThread(chatUsers[i].id-1);
                axios.post('http://cs431-05.cs.rutgers.edu:5000/chatthread',{id: chatUsers[i].id-1})
                .then((response2)=>{
                    setChatMessages(response2.data);
                });
            }
        }
    }

    const nextThread = () => {
    
        for (let i = 0 ; i < chatUsers.length; i++) {
            if (chatUsers[i].id === messageThread) {
                setMessageThread(chatUsers[i].id+1);
                axios.post('http://cs431-05.cs.rutgers.edu:5000/chatthread',{id: chatUsers[i].id+1})
                .then((response2)=>{
                    setChatMessages(response2.data);
                });
            }
        }
    }

    useEffect(()=>{
        // call to axios for the list of users
        axios.post('http://cs431-05.cs.rutgers.edu:5000/chatdata',{username: user})
        .then((response)=>{
            if (response.data.length !== 0) {
                setChatUsers(response.data);
            
                setMessageThread(response.data[0].id);
                axios.post('http://cs431-05.cs.rutgers.edu:5000/chatthread',{id: response.data[0].id})
                .then((response2)=>{
                    setChatMessages(response2.data);
                   
                });
        }
        })
    },[])

const handleKeyDown = (event) => {
    const btn = document.getElementById('send');
    console.log(btn);
    if (event.keyCode === 13 && !btn.disabled) {
        sendMessage();
    }
}
    

    useEffect(()=>{
        axios.post('http://cs431-05.cs.rutgers.edu:5000/users',{username: user})
    .then((response3)=>{
        setUsers(response3.data);
    });
    },[])

    return (
        
    <Grid container spacing={0}>
       
        <Grid item xs={4}>
            

                    <Paper elevation={5}>
                    <Box p={3}>
                    <Typography variant="h4" gutterBottom>
                           Messages
                    </Typography>
                    <IconButton
                    disabled={chatUsers.length === 0 || chatUsers[0].id === messageThread}
                    onClick={prevThread}
                    aria-label='left'
                    color='primary'>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton
                    disabled={chatUsers.length === 0 || chatUsers[chatUsers.length-1].id === messageThread}
                    onClick={nextThread}
                    aria-label='right'
                    color='primary'>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton
                    onClick={handleClickOpen}
                    aria-label='compose'
                    color='primary'>
                        <CreateIcon />
                    </IconButton>
                    <Dialog open={open}>
        <DialogTitle>Enter Reciepient</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Choose the username of the reciepient.
          </DialogContentText>
          <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
      disablePortal
      id="combo-box-demo"
      options={users}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={inputValue === null || inputValue === '' ? 'Choose a valid username':''} error={value === null || value === '' || !users.includes(value)}  />}
        />
        </DialogContent>
        <DialogActions>
          <Button disabled={value === null || value === '' || !users.includes(value)} onClick={handleSubmit}>Message</Button>
          <Button onClick={()=>{setOpen(false);}}>Cancel</Button>
        </DialogActions>
      </Dialog>
                        <Divider />
                        <List id="chat-window-messages">
                            {listChatUsers}
                        </List>
                    </Box>
                    </Paper>
                
        </Grid>
        <Grid item xs={8}>
        
          
                <Paper elevation={5}>
                    <Box p={3}>
                        <Typography variant="h4" gutterBottom>
                           Thread
                        </Typography>
                        <Divider />
                        <Grid container spacing={4} alignItems="center">
                            <Grid id="chat-window" xs={12} item>
                                <List id="chat-window-messages">
                                    {listChatMessages}
                                </List>
                            </Grid>
                            <Grid xs={5} item>
                                <FormControl>
                                    <TextField onChange={handleChange} onKeyDown={handleKeyDown}
                                    value={message}
                                    label="Type your message..."
                                    variant="outlined"/>
                                </FormControl>
                            </Grid>
                            <Grid xs={1} item>
                                <IconButton
                                id="send"
                                disabled={message === ""} 
                                onClick={sendMessage}
                                aria-label="send"
                                color="primary">
                                    <SendIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
           
       
      </Grid>
    </Grid>
    );
}