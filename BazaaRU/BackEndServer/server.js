const express = require("express");
const Sequelize = require("sequelize");
const app = express(); 
const cors = require("cors");
const nodemailer = require("nodemailer");
const port = 5000;

/**
 * 
 * @param {*} props 
 * @returns new instance of sequelize with connection to datbase
 */
const sequelize = new Sequelize("BazaaRu", "expressAccount", "bazaaru2223", {
  host: "localhost",
  dialect:
    "mariadb" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

async function testDb() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testDb();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "bazaaru.proj@gmail.com",
    pass: "edbpsfmqukthvzda"
  }
});

const testMailOptions = {
  from: 'bazaaru.proj@gmail.com',
  to: 'ctc111@scarletmail.rutgers.edu',
  subject: 'Bazaaru Test Email',
  text: 'Backend server start test email'
};

transporter.sendMail(testMailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

const mariadb = require("mariadb");
const { response } = require("express");
const pool = mariadb.createPool({
  host: "localhost",
  user: "expressAccount",
  password: "bazaaru2223",
  connectionLimit: 5,
});

app.use(cors());
app.use(express.json());


// ACCOUNT-RELATED ROUTES
// NEEDS: ROUTE FOR LOGOUT, DELETING ACCOUNTS
/**
 * @params username, password
 * @returns true for a good login, false otherwise 
 */
app.post("/login", async (req, res) => {
  console.log("login requested");
  console.log(req.body);
  const userInputUsername = req.body.uName;
  console.log(userInputUsername);
  const results = await sequelize.query(
    "SELECT * FROM accounts WHERE username='" + userInputUsername + "'"
  );
  console.log("results", results);
  if (
    !(typeof results[0][0] === "undefined") &&
    results[0][0].password === req.body.pWord
  ) {
    res.send({ received: "true" });
    return;
  }
  res.send({ received: "false" });
});

/**
 * @returns entire list of usernames and permID's in accounts table
 */
app.get("/accountList", async (req, res) => {
  console.log("account list requested");
  const results = await sequelize.query(
    "SELECT username, permID FROM accounts;"
  );
  res.send(results[0]);
});

/**
 * @param username of buyer and seller, price, postID, current date and time, and new transactionID (req)
 * @returns an indication of whether or not the transaction was successful. Updates transactions, accounts, and item_catalog tables appropriately
 */
app.post("/buy", async (req, res) => {
  //A. Collect data from body of request received
  const transaction_id = req.body.transaction_id;
  const post_id = req.body.post_id;
  const price = req.body.price;
  const buyer_username = req.body.buyer_username;
  const seller_username = req.body.seller_username;
  const date_purchased = req.body.date_purchased;
  if (
    typeof post_id === 'number' &&
    typeof price === 'number' &&
    typeof buyer_username === 'string' &&
    typeof seller_username === 'string' &&
    typeof date_purchased === 'string') {

       

        const responseDB0 = sequelize.query("SELECT MAX(transaction_id) AS ID FROM transactions;").then((response)=>{
            transaction_id = response[0][0].ID + 1;
            const acc_balance = sequelize.query(
              "SELECT acc_balance FROM accounts WHERE username = '" +
                buyer_username +
                "';"
            ).then((response0)=>{
              console.log(response0);
              if (response0[0][0].acc_balance >= price) {
                const responseDB = sequelize.query(
                  "INSERT INTO transactions SET transaction_id = " +
                    transaction_id +
                    ", post_id = " +
                    post_id +
                    ", buyer_username = '" +
                    buyer_username +
                    "', seller_username = '" +
                    seller_username +
                    "', date_purchased = '" +
                    date_purchased +
                    "';"
                ).then(()=>{
                  const responseDB2 = sequelize.query(
                    "UPDATE item_catalog SET been_purchased = 1 WHERE post_id = " +
                      post_id +
                      ";"
                  ).then(()=>{
                    const responseDB3 = sequelize.query(
                      "UPDATE accounts SET acc_balance = acc_balance - " +
                        price +
                        " WHERE username = '" +
                        buyer_username +
                        "';"
                    ).then(()=>{
                      const responseDB4 = sequelize.query(
                        "UPDATE accounts SET acc_balance = acc_balance + " +
                          price +
                          " WHERE username = '" +
                          seller_username +
                          "';"
                      ).then(()=>{
                        res.send("success");
                      });
              
                    });
                  });
                });
              }
              else {
                  res.send('no-money');
              }

            });
        });

        


        

        
  
          
  
          
  
          
          
  
      

        
        
      }

      else {
        res.send('bad format for /buy');
      }

      
  
  //B. Send to database
  const responseDB = await sequelize.query(
    "UPDATE item_catalog SET been_purchased = 1 WHERE post_id = " +
      post_id +
      ";"
  );
  //C. Send response to react
});

/**
 * @param username of current user (req)
 * @returns list of all usernames from accounts table, excluding the current user
 */
app.post("/users", async (req, res) => {
  const username = req.body.username;
  
   sequelize.query(
    "SELECT username FROM accounts WHERE username!='" + username + "'"
  )
  .then((response)=>{
    let arr = [];
    for (let i = 0; i < response[0].length; i++) {
      arr.push(response[0][i].username);
    }
    res.send(arr);
  });

});

/**
 * @param username of current user (req)
 * @returns all data from messages table relating to the current user
 */
app.post("/chatdata", async (req, res) => {
    const username = req.body.username;
    const arr = [];
    const responseDB0 = sequelize.query("SELECT * FROM messages WHERE users like '%" + username  + "%';")
    .then((response)=>{
       for (let i = 0 ; i < response[0].length; i++) {
        usersInContactSplit = response[0][i].users.split(',');
        if (usersInContactSplit[0] === username) {
          arr.push({id: response[0][i].message_id, username: usersInContactSplit[1]});
        }
        else {
          arr.push({id: response[0][i].message_id, username: usersInContactSplit[0]});
        }
      }
       res.send(arr);
    });
   
});

/**
 * @param message_id (req)
 * @returns sender and the message from messages table corresponding to the current message_id
 */
app.post("/chatthread", async (req, res) => {
  const id = req.body.id;
  const thread_arr = [];
  const responseDB0 = sequelize.query("SELECT sender,message FROM messages_streams WHERE message_id = " + id +  " ORDER BY time_sent ASC;")
  .then((response)=>{
     for (let i = 0 ; i < response[0].length; i++) {
        thread_arr.push({user: response[0][i].sender, message: response[0][i].message});
     }
     res.send(thread_arr);
  });
 
});

/**
 * @param message_id, sender of the message, the current time, and the message (req)
 * @returns an indicator of whether the message was inserted into the table or not. The message is inserted into the messages_streams table
 */
app.post("/sendmessage", async (req, res) => {
  const id = req.body.id;
  const sender = req.body.sender;
  const time_sent = req.body.time_sent;
  const message = req.body.message; 
  
  const responseDB = sequelize.query(
    "INSERT INTO messages_streams SET message_id = " +
      id +
      ", sender = '" +
      sender +
      "', time_sent = '" +
      time_sent +
      "', message = '" +
      message +
      "';");

      res.send('success');
 
});

/**
 * @param sender and reciever of message (req)
 * @returns an indicator of whether the new message_id was inserted into the table or not. The message_id is inserted into the messages table
 */
app.post("/newmessage", async (req, res) => {
  const sender = req.body.sender;
  const reciever = req.body.reciever;
  let message_id;
 
  const responseDB0 = sequelize.query("SELECT MAX(message_id) AS ID FROM messages;")
  .then((response)=>{
    message_id = response[0][0].ID + 1
    const responseDB = sequelize.query(
      "INSERT INTO messages SET message_id = " +
        message_id +
        ", users = '" +
        sender + "," + reciever + 
        "';")
        .then(()=>{
          res.send({message_id:message_id});
        });
    
  });
  

      
 
});

/**
 * @param message_id (req)
 * @returns nothing. The message is deleted from the messages and messages_stresms tables
 */
app.post("/delmessage", async (req, res) => {
  const message_id = req.body.id;
 
  sequelize.query("DELETE FROM messages_streams WHERE message_id = " + message_id + ";")
  .then(()=>{
    sequelize.query("DELETE FROM messages WHERE message_id = " + message_id + ";");
  });
  

      
 
});


/**
 * @returns whether or not a user can purchase an item from the item_catalog
 */
app.post("/check_currency", async (req, res) => {
  
  const response_to_send = { transaction_possible: true };
  
});

/**
 * @returns most recent transactionID
 */
app.get("/transactionID", async (req, res) => {
  sequelize
    .query("SELECT MAX(transaction_id) AS ID FROM transactions;")
    .then((response) => {
      res.send(response);
    });
});

/**
 * @param user_id and price (req)
 * @returns nothing, updates currency
 */
app.post("/currency_update", async (req, res) => {
  //A. Collect data from body of request received
  const user_id = req.body.user_id;
  const price = req.body.price;
  res.send("success");
  //B. Send to database
  const responseDB = await sequelize.query(
    "UPDATE accounts SET acc_balance = 1 WHERE post_id = " + post_id + ";"
  );
  //C. Send response to react
});


/**
 * @param username (req)
 * @returns acc_balance of the username
*/
app.post("/findBalance", async(req,res)=>{
  //A. Get username from request received
  const username = req.body.username;
  console.log("Account balance requested");
  console.log(username);
  //B. Send query for Balance
  const results = await sequelize.query(
    "SELECT acc_balance FROM accounts WHERE username = '" + username + "';"
  );
  console.log(results);
  //C. Return balance to frontend 
  res.send({acc_balance: results[0][0].acc_balance});
});

/**
 * @param username, newPassword (req)
 * @returns a indicator whether or not the accounts table was updated. Updates the password of the username in the accounts table
 */
app.post("/passwordChange", async (req, res) => {
  console.log("password change req");
  const userInputUsername = req.body.uName;
  const userInputPassword = req.body.pWord;
  const results = await sequelize.query("UPDATE accounts SET password=" + '"' + userInputPassword + '" WHERE username=' + '"' + userInputUsername + '";');
  res.send({received: true});
})

/**
 * 
 * @param {*} str (req) takes an email as a string
 * @returns true if email ends in rutgers.edu
 */
function checkRutgersEmail(str) {
  return str.endsWith("rutgers.edu");
}

/**
 * @param key (req)
 * @returns that an account was created. First checks whether or not the key given was a valid key of a current pending_account.
 * Inserts a new account into the accounts table, using the username and password corresponding to the key given
 */
app.get("/accountCreation/:key", async (req,res) => {
  const key = req.params.key;
  const response = await sequelize.query(
    "SELECT MAX(userID) AS MAX_IND FROM accounts;"
  );
  console.log(response);
  const curMax = response[0][0].MAX_IND;
  console.log(curMax);
  var nextMax = curMax + 1;
  const newAccData = await sequelize.query("SELECT * FROM pending_accounts WHERE rand_string='" + key + "';");
  const newUser = newAccData[0][0].username;
  const newPass = newAccData[0][0].password;
  const newAcc = await sequelize.query("INSERT INTO accounts (username, password, userID, permID, acc_balance) VALUES ('" + newUser + "','" + newPass + "'," + nextMax + ", 1, 0);");
  const removeFrom = await sequelize.query("DELETE FROM pending_accounts WHERE rand_string='" + key + "';");
  res.send("Account created! Please go to cs431-05.cs.rutgers.edu:3000 to sign in!");
});

/**
 * @param newUser, newPassword (req)
 * 
 */
app.put("/createAccount", async (req, res) => {
  console.log("account creation requested");
  console.log(req.body);
  const userInputUsername = req.body.uName;
  const userInputPassword = req.body.pWord;
  const userInputEmail = req.body.email;
  const check = await sequelize.query("SELECT username FROM accounts WHERE username='" + userInputUsername + "';" );
  if (!(checkRutgersEmail(userInputEmail))) {
    const mailOptions = {
      from: 'bazaaru.proj@gmail.com',
      to: userInputEmail,
      subject: 'Bazaaru Account Creation - Email error',
      text: 'You must use a Rutgers email to register for BazaaRu!'
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
  else if (check[0].length !== 0) {
    const mailOptions = {
      from: 'bazaaru.proj@gmail.com',
      to: userInputEmail,
      subject: 'Bazaaru Account Creation - Username taken',
      text: 'This username is already taken!'
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
  else {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 6; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  const results = await sequelize.query(
    "INSERT INTO pending_accounts (rand_string, username, password, email) VALUES (" +
      '"' +
      result +
      '", "' +
      userInputUsername +
      '", "' +
      userInputPassword +
      '", "' +
      userInputEmail +
      '");'
  );
  console.log(results);
  var resultLink = "http://cs431-05.cs.rutgers.edu:5000/accountCreation/"+result;
  const mailOptions = {
    from: 'bazaaru.proj@gmail.com',
    to: userInputEmail,
    subject: 'Bazaaru Account Creation - Please verify your account',
    text: resultLink
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send({ received: "true" });
  }
});

/**
 * @param username (req)
 * @returns nothing. Deletes account from accounts table corresponding to username
 */

app.put("/deleteAccount", async (req, res) => {
  console.log("account deletion requested");
  console.log(req.body);
  const userInputUsername = req.body.uName;
  console.log(userInputUsername);
  const results = await sequelize.query("DELETE FROM accounts WHERE username=" + '"' + userInputUsername + '";' );
});

/**
 * @param username (req)
 * @returns nothing. Sets Username's permID = 2 in the accounts table
 */
app.post("/promoteAccount", async (req,res) => {
  console.log("account promote req");
  console.log(req.body);
  const userInputUsername = req.body.uName;
  const results = await sequelize.query("UPDATE accounts SET permID=2 WHERE username=" + '"' + userInputUsername + '";');
});

/**
 * @param username (req)
 * @returns nothing. Sets username's permID = 1 in the accounts table
 */
app.post("/demoteAccount", async (req,res) => {
  console.log("account demote req");
  console.log(req.body);
  const userInputUsername = req.body.uName;
  const results = await sequelize.query("UPDATE accounts SET permID=1 WHERE username=" + '"' + userInputUsername + '";');
});

/**
 * @param username (req)
 * @returns permID of username from accounts table
 */
app.post("/accountRank", async (req, res) => {
  console.log("rank requested");
  console.log(req.body);
  const userInputUsername = req.body.username;
  console.log(userInputUsername);
  const results = await sequelize.query(
    "SELECT permID from accounts WHERE username='" + userInputUsername + "';"
  );
  console.log(results);
  res.send({ permID: results[0][0].permID });
});

/**
 * @param updateAmount, username (req)
 * @returns an indicator of whether or not the update was successful. Updates the acc_balance of username by updateAmount in the accounts table
 */
app.post("/updateBalance", async (req, res) => {
  //Collect informationneeded to update account balance
  const update = req.body.updateAmount;
  console.log(update);
  const usersid = req.body.userName;
  console.log(usersid);
  const DBResponse = await sequelize.query(
    "UPDATE accounts SET acc_balance= acc_balance+" +
      update +
      " WHERE username = '" +
      usersid +
      "';"
  );
  res.send(DBResponse);
});

/**
 * @param acID (req)
 * @returns entire account information of acID from accounts table
 */
app.get("/getAccount/:acID", async (req, res) => {
  console.log(req.params);
  sequelize
    .query(
      "SELECT * FROM accounts WHERE userID = " +
        req.params.acID +
        ";"
    )
    .then((response) => {
      console.log(
        "SELECT * FROM accounts WHERE userID = " +
          req.params.acID +
          ";"
      );
      res.send(response);
    });
});

/**
 * @param acKW (req)
 * @returns entire account information from accounts where acKW is contained in the username
 */
app.get("/ACresults/:acKW", async (req, res) => {
  console.log(req.params);
  sequelize
    .query(
      "SELECT * FROM accounts WHERE username LIKE '%" +
        req.params.acKW +
        "%';"
    )
    .then((response) => {
      console.log(
      "SELECT * FROM accounts WHERE username LIKE '%" +
        req.params.acKW +
        "%';"
      );
      res.send(response);
    });
});

// CATALOG-RELATED ROUTES
// NEEDS: ROUTES FOR LOADING A SPECIFIC USERS ITEMS

//SHAJIA
//1. app.post is asking express to send some information to our database
//2. '/createPost' the path that I chose to identify my request
//3. (req, res) is saying that the server is listening for a request (that I will send) and responding

/**
 * @param title, description, price, type, userid (all data for creating a post)
 * @return nothing, updates datbase with new post
 */
app.post("/createPost", async (req, res) => {
  //A. Collect data from body of request received
  const title = req.body.postTitle;
  const description = req.body.postDescription;
  const price = req.body.postPrice;
  const type = req.body.postType;
  res.send("success");
  const userid = req.body.postUserID;
  //B. Send to database
  console.log("create post requested");
  const response = await sequelize.query(
    "SELECT MAX(post_id) AS MAX_IND FROM item_catalog;"
  );
  console.log(response);
  const curMax = response[0][0].MAX_IND;
  console.log(curMax);
  const nextMax = curMax + 1;
  console.log(nextMax);
  const response2 = await sequelize.query("SELECT NOW() AS CURTIME;");
  console.log(response2);
  const currentTime = response2[0][0].CURTIME;
  const responseDB = await sequelize.query(
    "INSERT INTO item_catalog (post_id, createdat, username, product, image_url, price, category, description) VALUES (" +
      nextMax +
      ", NOW() ,'" +
      userid +
      "','" +
      title +
      "', 'https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg', " +
      price +
      ",'" +
      type +
      "','" +
      description +
      "');"
  );
});

/**
 * @param username (req)
 * @returns post_id of all posts from item_catalog that have not been purchased and are not made by username
 */
app.post("/catalog", async (req, res) => {
  sequelize
    .query(
      "SELECT post_id FROM item_catalog WHERE been_purchased = 0 AND username != '" +
        req.body.username +
        "' ORDER BY post_id DESC;"
    )
    .then((response) => {
      res.send(response);
    });
});

/**
 * @param username (req)
 * @returns post_id of all posts from item_catalog from this week that have not been purchased and are not made by username
 */
app.post("/catalogweek", async (req, res) => {
  sequelize
    .query(
      "SELECT post_id FROM item_catalog WHERE been_purchased = 0 AND YEARWEEK(createdat, 1) = YEARWEEK(CURDATE(), 1) AND username != '" +
        req.body.username +
        "' ORDER BY post_id DESC;"
    )
    .then((response) => {
      res.send(response);
    });
});

/**
 * @param postID (req)
 * @returns entire post information of postID from item_catalog that has not been purchased
 */
app.get("/catalog/:postID", async (req, res) => {
  console.log(req.params);
  sequelize
    .query(
      "SELECT * FROM item_catalog WHERE post_id = " +
        req.params.postID +
        " AND been_purchased = 0;"
    )
    .then((response) => {
      console.log(
        "SELECT * FROM item_catalog WHERE post_id = " +
          req.params.postID +
          " AND been_purchased = 0;"
      );
      res.send(response);
    });
});

/**
 * @returns sets the port for the application to listen on
 */
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

/**
 * @param postKW (req)
 * @returns entire post information from item_catalog that has not been purchaes where postKW is contained in the title or description 
 */
app.get("/results/:postKW", async (req, res) => {
  console.log(req.params);
  sequelize
    .query(
      "SELECT * FROM item_catalog WHERE (product LIKE '%" +
        req.params.postKW +
        "%' OR description LIKE '%" +
        req.params.postKW +
        "%') AND been_purchased = 0;"
    )
    .then((response) => {
      console.log(
        "SELECT * FROM item_catalog WHERE (product LIKE '%" +
          req.params.postKW +
          "%' OR description LIKE '%" +
          req.params.postKW +
          "%') AND been_purchased = 0;"
      );
      res.send(response);
    });
});

/**
 * @param postID (req)
 * @returns nothing. Deletes postID from item_catalog if it has not been purchased
 */
app.post("/transactionCancel", async (req, res) => {
  console.log(req.params);
  sequelize
    .query(
      "DELETE FROM item_catalog WHERE post_id = " +
        req.body.postID +
        " AND been_purchased = 0;"
    )
    .then((response) => {
      console.log(
        "DELETE FROM item_catalog WHERE post_id = " +
          req.body.postID +
          " AND been_purchased = 0;"
      );
      res.send(response);
    });
});

/**
 * @param postID (req)
 * @returns a database update
 */
app.post("/transactionRefund", async (req, res) => {
  console.log("refund requested");
  const postID = req.body.postID;
  const results = sequelize.query(
    "SELECT * FROM transactions WHERE post_id = " + postID + ";"
  );
  const results2 = sequelize.query(
    "SELECT * FROM item_catalog WHERE post_id = " + postID + ";"
  );
  const value = results2[0][0].price;
  const buyer = results[0][0].buyer_username;
  const seller = results[0][0].seller_username;
  //Add value back to buyers account
  sequelize.query(
    "UPDATE accounts SET acc_balance = acc_balance + " +
      value +
      " WHERE username = " +
      buyer +
      ";"
  );
  //Remove value from sellers account
  sequelize.query(
    "UPDATE accounts SET acc_balance = acc_balance - " +
      value +
      " WHERE username = " +
      seller +
      ";"
  );
  sequelize.query(
    "UPDATE item_catalog SET been_purchased = 0 WHERE post_id = " + postID + ";"
  );
  sequelize.query("DELETE FROM transactions WHERE post_id = " + postID + ";");
});

/**
 * @param username, complaintType, complaintDescription (req)
 * @returns nothing. Inserts new complaint with username, complaintType and complaintDescription into complaints table
 */
app.post("/addComplaint", async (req,res) => {
  console.log("complaint req");
  console.log(req.body);
  const userInputUsername = req.body.uName;
  const complaintType = req.body.cType;
  const complaintDesc = req.body.cDesc;
  const result = sequelize.query("INSERT INTO complaints (username, type, description) VALUES (" + '"' + userInputUsername + '", ' + '"' + complaintType + '", ' + '"' + complaintDesc + '"' + ");");
  console.log(result[0]);
});

/**
 * @returns entire complaint information from complaints table
 */
app.get("/complaintList", async (req,res) => {
  const results = await sequelize.query(
    "SELECT * FROM complaints;"
  );
  res.send(results[0]);
});

/**
 * @param complaintID (req)
 * @returns nothing. Deletes complaintID from complaints table
 */
app.post("/deleteComplaint", async (req,res) => {
  console.log("complaint delete req");
  console.log(req.body);
  const complaintID = req.body.cID;
  const results = sequelize.query("DELETE FROM complaints WHERE complaintID=" + '"' + complaintID + '";');
});

/**
 * @param username (req)
 * @returns entire transaction information of username from transaction table
 */
app.post("/getTransactions", async (req,res) => {
  console.log("transactions requested");
  console.log(req.body);
  const userInputUsername = req.body.uName;
  const results = await sequelize.query("SELECT * FROM transactions WHERE buyer_username=" + '"' + userInputUsername + '" OR seller_username=' + '"' + userInputUsername + '";');
  console.log(results[0]);
  res.send(results[0]);
});


//REVIEW RELATED ROUTES

//1.To check if a person made a purchase with someone else
/**
 * @param authorUsername, subjectUsername (req)
 * @returns an indicator of whether or not the author and subject had a transaction occur between them.
 * Also returns transaction_id from transactions table where author is the buyer and subject is the sender
 */
app.post("/check_for_purchase", async (req, res) => {
  console.log("Checking to see if the person tyring to write a review made a purchase...");
  const reviewer = req.body.writerUN;
  console.log("The person trying to write the review is: "+ {reviewer});
  const reviewee = req.body.subjectUN;
  console.log("The person they are trying to write the review n is: " + {reviewee});
  const response = await sequelize.query(
    "SELECT transaction_id FROM transactions WHERE buyer_username = '" + reviewer + "' AND seller_username = '" + 
    reviewee + "';"
  );
  console.log(response);
  if (
    (typeof response[0][0] === "undefined")) {
    console.log("There were no transactions");
    res.send({answer: false});
  } else{
    console.log("There was a transaction");
    res.send({answer: true});
  }
});

//2. Write the damn review 
/**
 * @param authorUsername, subjectUsername, review, rating (req)
 * @returns success. Creates new review into reviews table using authorUsername, subjectUsername, review and rating
 */
app.post("/make_review", async (req, res) => {
  console.log("Working on making a review now!");
  const reviewer = req.body.writerUN;
  console.log("The person trying to write the review is: "+ {reviewer});
  const reviewee = req.body.subjectUN;
  console.log("The person they are trying to write the review n is: " + {reviewee});
  const acc_review = req.body.review;
  console.log(acc_review);
  const rating = req.body.rating;
  console.log(rating);
  const response = await sequelize.query(
    "INSERT INTO reviews (writer_usnm, subject_usnm, acc_review, num_rating) VALUES('" + reviewer+ "','" + 
    reviewee + "','" + acc_review + "'," + rating + ");"
  );
  console.log(response);
  res.send("success");
});

//Get RID for All the reviews
/**
 * @param username (req)
 * @returns rid from reviews related to username
 */
app.post("/get_reviews", async (req,res)=>{
  console.log("Getting all the reviews for the given username now");
  //Log the username
  const username = req.body.username;
  console.log("username we are looking for is" + username);
  const response = await sequelize.query(
    "SELECT rid FROM reviews WHERE subject_usnm = '" + username + "';"
  ); 
  res.send(response);
});

/**
 * @param rid (req)
 * @returns all review information of rid from reviews table
 */
app.get("/reviews/:rid", async (req, res) => {
  console.log(req.params);
  sequelize
    .query(
      "SELECT * FROM reviews WHERE rid = " +
        req.params.rid + ";"
    )
    .then((response) => {
      console.log(
        "SELECT * FROM reviews WHERE rid = " +
        req.params.rid + ";"
      );
      res.send(response);
    });
});

//Get someone's rating
/**
 * @param username (req)
 * @returns an indicator of whether or not username contains a rating
 * Also returns average rating of username from all of username's ratings in the reviews table
 */
app.post("/findrating", async (req,res)=>{
  console.log("collecting the average rating for the user now");
  //Log the username
  const username = req.body.username;
  console.log("username we are looking for to find a rating on is" + username);
  const response = await sequelize.query(
    "SELECT AVG(num_rating) AS rating FROM reviews WHERE subject_usnm = '" + username + "';"
  );
  console.log("Result from query is " + response); 
  if (
    (typeof response[0][0] === "undefined")) {
    console.log("This person has no rating");
    res.send("This user has no rating yet");} else{
  res.send({rating: response[0][0].rating});}
});


