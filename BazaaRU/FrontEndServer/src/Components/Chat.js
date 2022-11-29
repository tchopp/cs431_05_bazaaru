import { Box, Typography, Paper, Divider, Grid, List, ListItem, ListItemText, FormControl, TextField, IconButton, Stack, Link } from "@mui/material";
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

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const user = Cookies.get('userName');

export function Chat() {
    const [textinput, settextinput] = useState();
    const [open, setOpen] = useState(false);
    // chat users and message ids for each chat
    const[chatUsers,setChatUsers] = useState([]);
    // chat messages that show up on screen when chat with a person is selected
    const [chatMessages, setChatMessages] = useState([]);
    // id of the message thread currently hilighted
    const [messageThread,setMessageThread] = useState(0);
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
        

            <ListItemText primary={`${userData.username}`} />
            
       
        </ListItem>
       
    
    );

    const handleText = ({target}) => {
        settextinput(target.value);
    }
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        axios.post("http://localhost:5000/newmessage",{sender: user, reciever: textinput})
        .then((response)=>{
            console.log(response.data);
            setMessageThread(response.data.message_id);
            setChatUsers([...chatUsers, {id: response.data.message_id, username: textinput}]);
        });
      };

    const handleChange = ({target}) => {
        setMessage(target.value);
    }
    const sendMessage = () => {
        if (message) {
            axios.post('http://localhost:5000/sendmessage',{id: messageThread, sender: user, time_sent: new Date().toISOString().slice(0, 19).replace('T', ' '), message: message})
            .then(()=>{
                setChatMessages([...chatMessages, {user: user, message: message}]);
            });
        }
    }


    const prevThread = () => {
        for (let i = 0 ; i < chatUsers.length; i++) {
            if (chatUsers[i].id === messageThread && i !== 0) {
                setMessageThread(chatUsers[i].id-1);
                axios.post('http://localhost:5000/chatthread',{id: chatUsers[i].id-1})
                .then((response2)=>{
                    setChatMessages(response2.data);
                });
            }
        }
    }

    const nextThread = () => {
        for (let i = 0 ; i < chatUsers.length; i++) {
            if (chatUsers[i].id === messageThread && i !== chatUsers.length - 1) {
                setMessageThread(chatUsers[i].id+1);
                axios.post('http://localhost:5000/chatthread',{id: chatUsers[i].id+1})
                .then((response2)=>{
                    setChatMessages(response2.data);
                });
            }
        }
    }

    useEffect(()=>{
        // call to axios for the list of users
        axios.post('http://localhost:5000/chatdata',{username: user})
        .then((response)=>{
            setChatUsers(response.data);
            if (response.data !== 0) {
                setMessageThread(response.data[0].id);
                axios.post('http://localhost:5000/chatthread',{id: response.data[0].id})
                .then((response2)=>{
                    setChatMessages(response2.data);
                    
                });
            }
        })
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
                    onClick={prevThread}
                    aria-label='compose'
                    color='primary'>
                        <ChevronLeftIcon />
                    </IconButton>
                    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Reciepient</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the username of the reciepient.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="user"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleText}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
                    <IconButton
                    onClick={nextThread}
                    aria-label='compose'
                    color='primary'>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton
                    onClick={handleClickOpen}
                    aria-label='compose'
                    color='primary'>
                        <CreateIcon />
                    </IconButton>
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
                                    <TextField onChange={handleChange}
                                    value={message}
                                    label="Type your message..."
                                    variant="outlined"/>
                                </FormControl>
                            </Grid>
                            <Grid xs={1} item>
                                <IconButton 
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