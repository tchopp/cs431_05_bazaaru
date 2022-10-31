const express = require('express');
const Sequelize = require('sequelize');
const app = express(); //creates an express application called app
const cors = require('cors');
const port = 5005;

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

app.get('/dbTest', async(req, res) => {
	let conn;
	try{
		conn = await pool.getConnection();
		const rows = await conn.query("SELECT password FROM BazaaRu.accounts WHERE username='ac1'");
		console.log(rows);
		const jsonS = JSON.stringify(rows);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(jsonS);
	}
	catch(e){
	}
})

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

app.get('/catalog/:rowID', async (req,res) => {
	console.log(req.params);
	const results = await sequelize.query("SELECT * FROM item_catalog WHERE post_id=" + req.params.rowID + ";");
	res.send(results[0]);
})

app.get('/catalog/:keyword-:rowID', async (req,res) => { //get cs431-05.cs.rutgers.edu:5000/catalog/apple-1
        console.log(req.params);
        const results = await sequelize.query("SELECT * FROM item_catalog WHERE post_id=" + req.params.rowID +>
        res.send(results[0][0]);
})

//SHAJIA
//1. app.post is asking express to send some information to our database 
//2. '/createPost' the path that I chose to identify my request
//3. (req, res) is saying that the server is listening for a request (that I will send) and responding
app.post('/createPost', (req, res) => { 
	//req.data.....
})

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`)
})
