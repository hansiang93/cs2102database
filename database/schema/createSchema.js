require('dotenv').config();

const dbHelper = require('../dbHelper');

const userQuery =
	'CREATE TABLE users (' +
		'username VARCHAR(32) PRIMARY KEY, ' +
		'fullname VARCHAR(64),' +
		'email VARCHAR(256),' +
		'dob DATE,' +
		'country VARCHAR(64),' +
		'admin BOOLEAN' +
	');';


const catagoryQuery = 
    'CREATE TABLE catagory (' +
        'name VARCHAR(64) PRIMARY KEY' +
    ');';

const projectQuery = 
	'CREATE TABLE project (' +
		'pid SERIAL PRIMARY KEY,' +
		'creator VARCHAR(32) REFERENCES users(username),' +
		'title VARCHAR(256),' +
		'description VARCHAR(256),' +
		'catagory VARCHAR(64) REFERENCES catagory(name),' +
		'startdate DATE NOT NULL,' +
		'enddate DATE NOT NULL,' +
		'amountrequested BIGSERIAL' +
	');'

const investmentQuery = 
    'CREATE TABLE investment (' +
        'id SERIAL PRIMARY KEY,' +
        'investor VARCHAR(32) REFERENCES users(username) ON DELETE SET NULL,' +
        'project SERIAL REFERENCES project(pid) ON DELETE SET NULL,' +
        'amount DECIMAL CHECK(amount > 0),' +
        'date DATE NOT NULL' +
    ');';


dbHelper.executeQueriesInOrder(catagoryQuery, userQuery, projectQuery, investmentQuery)
    .then( () => console.log("Make tables done!") );
