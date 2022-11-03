const express = require('express');
const Sequelize = require('sequelize');
const app = express(); //creates an express application called app
const cors = require('cors');
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
		res.send({ received: 'true'});
		return;
	}
	res.send({ received: 'false' })
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
	sequelize.query("SELECT post_id FROM item_catalog ORDER BY post_id DESC LIMIT 5;").then((response) => {
		res.send(response);
	 });
	
})

app.get('/catalogweek', async(req,res) => {
	sequelize.query("SELECT post_id FROM item_catalog WHERE  YEARWEEK(createdat, 1) = YEARWEEK(CURDATE(), 1) ORDER BY post_id DESC LIMIT 5;").then((response) => {
		res.send(response);
	 });
	
})

app.get('/catalog/:postID', async(req,res) => {
	console.log(req.params);
	 sequelize.query("SELECT * FROM item_catalog WHERE post_id=" + req.params.postID + "").then((response) => {
		console.log("SELECT * FROM item_catalog WHERE post_id='" + req.params.postID + "'")
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
