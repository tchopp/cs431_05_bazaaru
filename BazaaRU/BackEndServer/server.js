const express = require('express');
const Sequelize = require('sequelize');
const app = express(); //creates an express application called app
const cors = require('cors');
//const cookieParser = require('cookie-parser');
const port = 5000;

const sequelize = new Sequelize('BazaaRu', 'expressAccount', 'bazaaru2223', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

async function testDb() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testDb();

const mariadb = require('mariadb')
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'expressAccount', 
     password: 'bazaaru2223',
     connectionLimit: 5
});

app.use(cors());
app.use(express.json());
//app.use(cookieParser());

// ACCOUNT-RELATED ROUTES
// NEEDS: ROUTE FOR LOGOUT, DELETING ACCOUNTS
app.post('/login', async (req, res) => {
	// This is currently missing input sanitization and case checking
	// Need to add case for missing username, missing password (may be better done in front end code) 
	console.log('login requested');
	console.log(req.body);
	const userInputUsername = req.body.uName;
	console.log(userInputUsername);
	const results = await sequelize.query("SELECT * FROM accounts WHERE username='" + userInputUsername + "'");
	console.log(results);
	if (results[0][0].password === req.body.pWord) {
		//res.cookie('userData', req.body.uName);
		res.send({ received: 'true'});
		return;
	}
	res.send({ received: 'false' })
})

app.post('/buy', async(req, res) => { 
    //A. Collect data from body of request received
    const transaction_id = req.body.transaction_id;
    const post_id = req.body.post_id;
    const buyer_username = req.body.buyer_username;
    const seller_username = req.body.seller_username;
    const date_purchased = req.body.date_purchased;
    res.send("success");
    //const userid = req.body.postUserID;
    //B. Send to database
    //replace with my stuff
    const responseDB = await sequelize.query("INSERT INTO transactions SET transaction_id = " + transaction_id + ", post_id = " + post_id + ", buyer_username = '" + buyer_username + "', seller_username = '" + seller_username + "', date_purchased = '" + date_purchased + "';");
    //C. Send response to react

})

app.post('/prod_update_user_buy', async(req, res) => { 
    //A. Collect data from body of request received
    const post_id = req.body.post_id;
    res.send("success");
    //const userid = req.body.postUserID;
    //B. Send to database
    //replace with my stuff
    const responseDB = await sequelize.query("UPDATE item_catalog SET been_purchased = 1 WHERE post_id = " + post_id + ";");
    //C. Send response to react

})

app.post('/currency_update_user_buy', async(req, res) => { 
    //A. Collect data from body of request received
	const username = req.body.username;
    const price = req.body.price;
    res.send("success");
    //const userid = req.body.postUserID;
    //B. Send to database
    //replace with my stuff
    const responseDB = await sequelize.query("UPDATE accounts SET acc_balance = acc_balance - " + price + " WHERE username = '" + username + "';");
    //C. Send response to react

})

app.get('/transactionID', async(req,res) => {
    sequelize.query("SELECT MAX(transaction_id) AS ID FROM transactions;").then((response) => {
        res.send(response);
     });
    
})

app.post('/currency_update', async(req, res) => { 
    //A. Collect data from body of request received
	const user_id = req.body.user_id;
    const price = req.body.price;
    res.send("success");
    //const userid = req.body.postUserID;
    //B. Send to database
    //replace with my stuff
    const responseDB = await sequelize.query("UPDATE accounts SET acc_balance = 1 WHERE post_id = " + post_id + ";");
    //C. Send response to react

})


app.put('/createAccount', async (req, res) => {
	// Needs input sanitization and checking
	// Currently does not check for existing account
	console.log('account creation requested');
	console.log(req.body);
	const userInputUsername = req.body.uName;
	const userInputPassword = req.body.pWord;
	const results = await sequelize.query("INSERT INTO accounts (username, password) VALUES (" + '"' + userInputUsername +  '", "' + userInputPassword + '");');
	console.log(results);
	res.send({ received: 'true' });
})

app.put('/deleteAccount', async (req,res) => {
	console.log('account deletion requested');
	console.log(req.body);
	const userInputUsername = req.body.uName;
	console.log(userInputUsername);
	//const results = await sequelize.query("")
})

app.post('/accountRank', async (req,res) => {
	console.log('rank requested');
	console.log(req.body);
	const userInputUsername = req.body.username;
	console.log(userInputUsername);
	const results = await sequelize.query("SELECT permID from accounts WHERE username='" + userInputUsername  +  "';");
	console.log(results);
	res.send({ permID: results[0][0].permID });
})

// CATALOG-RELATED ROUTES
// NEEDS: ROUTES FOR LOADING A SPECIFIC USERS ITEMS
/*(app.get('/catalog/:rowID', async (req,res) => {    // The query needs to be updated so that it returns the proper results. We will sort posts by chronological order, meaning that posts with the greatest post ID will be shown first. We can use row_number SQL function to order the rows based on post ID in desc order. 
	console.log(req.params);
	const results = await sequelize.query("SELECT * FROM item_catalog WHERE post_id=" + req.params.rowID + ";");
	res.send(results[0][0]);
})

app.get('/catalog/:keyword-:rowID', async (req,res) => {    // The query needs to be updated so that it sorts as above, and searches for items LIKE the keyword. 
        console.log(req.params);
        const results = await sequelize.query("SELECT * FROM item_catalog WHERE post_id=" + req.params.rowID + ";"); //get cs431-05.cs.rutgers.edu:5000/catalog/apple-1
        res.send(results[0][0]);
})*/

//SHAJIA
//1. app.post is asking express to send some information to our database 
//2. '/createPost' the path that I chose to identify my request
//3. (req, res) is saying that the server is listening for a request (that I will send) and responding
app.post('/createPost', async(req, res) => { 
	//A. Collect data from body of request received
	const title = req.body.postTitle;
	const description = req.body.postDescription;
	const price = req.body.postPrice;
	const type = req.body.postType;
	res.send("success");
	const userid = req.body.postUserID;
	//B. Send to database
	//replace with my stuff
	console.log("create post requested")
	const response = await sequelize.query("SELECT MAX(post_id) AS MAX_IND FROM item_catalog;");
	console.log(response);
	const curMax = response[0][0].MAX_IND;
	console.log(curMax);
	const nextMax = curMax + 1;
	console.log(nextMax);
	//const response2 = await sequelize.query("SELECT CURRENT_TIMESTAMP AS CURDATE;");
	const response2 = await sequelize.query("SELECT NOW() AS CURTIME;");
	console.log(response2);
	const currentTime = response2[0][0].CURTIME;
	const responseDB = await sequelize.query("INSERT INTO item_catalog (post_id, createdat, username, product, image_url, price, category, description) VALUES (" +  nextMax + ", NOW() ,'" + userid + "','" + title + "', 'https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg', " + price + ",'" + type + "','" + description + "');");
	//const responseDB = await sequelize.query("INSERT INTO item_catalog (post_id, createdat, username, product, image_url, price, category, description) VALUES (${nextMax}, '')")
	//C. Send response to react

})

app.get('/catalog', async(req,res) => {
	sequelize.query("SELECT post_id FROM item_catalog WHERE been_purchased = 0 ORDER BY post_id;").then((response) => {
		res.send(response);
	 });
	
})

app.get('/catalogweek', async(req,res) => {
	sequelize.query("SELECT post_id FROM item_catalog WHERE been_purchased = 0 AND YEARWEEK(createdat, 1) = YEARWEEK(CURDATE(), 1) ORDER BY post_id;").then((response) => {
		res.send(response);
	 });
	
})

app.get('/catalog/:postID', async(req,res) => {
	console.log(req.params);
	 sequelize.query("SELECT * FROM item_catalog WHERE post_id = " + req.params.postID + " AND been_purchased = 0;").then((response) => {
		console.log("SELECT * FROM item_catalog WHERE post_id = " + req.params.postID + " AND been_purchased = 0;")
		res.send(response);
	 });
	
})

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`)
	
})

app.get('/results/:postKW', async(req,res) => {
	console.log(req.params);
	 sequelize.query("SELECT * FROM item_catalog WHERE product LIKE 'G%'").then((response) => {
		console.log("SELECT * FROM item_catalog WHERE product LIKE 'G%'")
		res.send(response);
	 });
})

app.post('/updateBalance', async(req,res)=>{
	//Collect informationneeded to update account balance
	const update = req.body.updateAmount;
	console.log(update);
	const usersid= re.body.userName;
	console.log(usersid);
	res.send("sucessfully collected information for updating")

	//Need to make sure about the userid
	//Is userid the integer primary? and is that what cookies is holding? 
	//const currentBalance = await sequelize.query("SELECT acc_balance AS BALANCE FROM accounts WHERE userid = '" + usersid + "');");

})
