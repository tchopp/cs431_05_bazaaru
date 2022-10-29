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

app.get('/login', async (req, res) => {
	// Check req for valid input on username and password
	//try {
	//	const {username, password} = req.body;
	//	var inputPassword = JSON.parse(req.body.Password);
		//If input is good, check for valid login (correct username and password)
	//	res.json({ login: 'false' });
		//If login is good, we can let user login (for now will just return to the main page, however  
		//we need to eventually use a library to set a login cookie on the browser to
		// maintain login with the backend)
	//	res.json({ login: 'true' });
	//}
	//catch(e) {
	//	res.status(400).send(e.message)
	//}

	//FOR DEMO PURPOSES, THIS CURRENTLY DOES NOT QUERY
	//const user = req.body.username;
	//const pass = req.body.password;

	//if (user === "ac1" || user === "ac2" ) {
	//	if (pass === "ph" || pass === "phi") {
	//		res.send({ valid: 'true' });
	//	}
	//	res.send({ valid: 'false' });
	//}
	//res.send({ valid: 'false' });
	console.log('login requested');
	const results = await sequelize.query('SELECT * FROM accounts');
	console.log(results);
	res.send({ received: 'true' })
})

app.get('/createAccount', (req, res) => {
	//Check req for valid input
	//If input is good, send the account details PUT request to the database
	//Once PUT is complete, send user notification

	//FOR DEMO PURPOSES, THIS CURRENTLY DOES NOT QUERY
	console.log('account creation requested');
	//res.send({ received: 'true' });
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
