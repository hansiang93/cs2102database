const pg = require('pg');
const path = require('path');
const express = require('express');
const constants = require('./constants');
const bodyParser = require('body-parser');
const mainRouter = require('./api/all');
const queryExecuter = require('./database/dbExecuter.js');

const app = express();
app.set('port', constants.PORT_CONNECTION);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public')); //place to server static files
app.use(bodyParser.urlencoded({ extended: true })); //for retrieving form data

//set routers
app.use('/', mainRouter);

app.listen(app.get('port'), function() {
	console.log("Server has started running....");

	//Example to add new user
	// queryExecuter.addAccount('portato', 'baron chan', 'developer dude', 23,
	// 'MALE', 'baron504@gmail.com', 'Singapore', 'ADMIN');

	//Example to add new project
	// queryExecuter.addProject('myProject101', 'Art', '','fun thing',
	// 	new Date(), new Date(), 9001.00, 'dartteon');

	//Example to add fund
	// queryExecuter.addFund(1, 'dartheon', 100.99, new Date());
});