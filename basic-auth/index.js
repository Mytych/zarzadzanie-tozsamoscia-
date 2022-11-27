const express = require("express");
var path = require('path');

const app = express();
//funkcja weryfikacji
function authentication(req, res, next) {
	var authheader = req.headers.authorization;
	console.log(req.headers);

	if (!authheader) {
		var err = new Error('You are not authenticated!'); //wyrzucenie bledu 
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}

	var auth = new Buffer.from(authheader.split(' ')[1],
	'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];
//wpisujemy na sztywno haslo i uzytkownika
	if (user == 'werka' && pass == 'nic') {

		// jesli jest poprawne
		next(); //w przypadku gdy nie 
	} else {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

// First step is the authentication of the client
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));

// Server setup - wpisujemy w google by sie zalogowac (uruchomienie servera w node)
app.listen((3000), () => {
	console.log("Server is Running");
})
