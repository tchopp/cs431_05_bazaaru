const express = require('express');
const app = express();
const port = 5000;

const mariadb = require('mariadb')
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'expressAccount', 
     password: 'bazaaru2223',
     connectionLimit: 5
});

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

app.post('/loginReq', (req, res) => {
	// Check req for valid input on username and password
	var inputUsername = JSON.parse(req.body.Username);
	var inputPassword = JSON.parse(req.body.Password);
	//If input is good, check for valid login (correct username and password)
	res.json({ login: 'false' });
	//If login is good, we can let user login (for now will just return to the main page, however we need to eventually use a library to set a login cookie on the browser to maintain login with the backend)
	res.json({ login: 'true' });
})

app.post('/createAccountReq', (req, res) => {
	//Check req for valid input
	
	//If input is good, send the account details PUT request to the database 
	
	//Once PUT is complete, send user notification
	res.json({ created: 'true' })
})

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`)
})
