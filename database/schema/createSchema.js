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
    'CREATE TABLE category (' +
        'name VARCHAR(64) PRIMARY KEY' +
    ');';

const projectQuery = 
	'CREATE TABLE project (' +
		'pid INT PRIMARY KEY,' +
		'creator VARCHAR(32) REFERENCES users(username),' +
		'title VARCHAR(256),' +
		'description VARCHAR(256),' +
		'category VARCHAR(64) REFERENCES category(name),' +
		'startdate DATE NOT NULL,' +
		'enddate DATE NOT NULL,' +
		'amountrequested BIGSERIAL,' +
		'funded BOOLEAN' +
	');'

const investmentQuery = 
    'CREATE TABLE investment (' +
        'id INT PRIMARY KEY,' +
        'investor VARCHAR(32) REFERENCES users(username) ON DELETE SET NULL,' +
        'project INT REFERENCES project(pid) ON DELETE SET NULL,' +
        'amount DECIMAL CHECK(amount > 0),' +
        'date DATE' +
    ');';

const investmentFunctionQuery = 
    'CREATE OR REPLACE FUNCTION projectInvestment(projectid INT)' +
        'RETURNS DECIMAL AS $$' +
        'DECLARE totalinvestment DECIMAL;' +
        'BEGIN' +
        'SELECT SUM(i.amount) INTO totalinvestment' +
        'FROM investment i, project p' +
        'WHERE projectid = p.pid' +
        'AND i.project = p.pid;' +
        'RETURN totalinvestment;' +
        'END; $$' +
        'LANGUAGE PLPGSQL;';

const investmentTriggerQuery =
    'CREATE OR REPLACE FUNCTION addInvestmentTrigger()' +
    ' RETURNS trigger AS ' +
    ' $$' +
    ' BEGIN' +
    ' IF (projectInvestment(NEW.pid) >= amountrequested) THEN' +
    ' SET funded = TRUE;' +
    ' ELSEIF (projectInvestment(pid) < amountrequested) THEN' +
    ' SET funded = FALSE;' +
    ' END IF;' +
    ' RETURN NEW;' +
    'END;' +
    '$$' +
    'LANGUAGE \'plpgsql\';'

dbHelper.executeQueriesInOrder(catagoryQuery, userQuery, projectQuery, investmentQuery, investmentFunctionQuery)
    .then(() => console.log("Make tables done!"));