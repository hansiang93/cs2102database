require('dotenv').config();

const dbHelper = require('../dbHelper');

const userQuery =
	'CREATE TABLE users ( ' +
	'username VARCHAR(32) PRIMARY KEY, ' +
	'fullname VARCHAR(64) NOT NULL, ' +
	'email VARCHAR(256), ' +
	'dob DATE, ' +
	'country VARCHAR(64), ' +
	'admin BOOLEAN ' +
	');';


const categoryQuery = 
    'CREATE TABLE category ( ' +
    'name VARCHAR(64) PRIMARY KEY, ' +
    'description VARCHAR(1024) ' +
    ');';

const projectQuery = 
	'CREATE TABLE project ( ' +
	'pid SERIAL PRIMARY KEY, ' +
	'creator VARCHAR(32) REFERENCES users(username) ON DELETE CASCADE ON UPDATE CASCADE, ' +
	'title VARCHAR(256) NOT NULL, ' +
	'description VARCHAR(1024), ' +
	'startdate DATE NOT NULL, ' +
	'enddate DATE NOT NULL, ' +
	'amountrequested BIGINT NOT NULL CHECK(amountrequested > 0), ' +
	'amountreceived BIGINT NOT NULL CHECK(amountreceived >= 0)' +
	');';

const hasCategoryQuery =
    'CREATE TABLE has ( ' +
    'pid SERIAL REFERENCES project(pid) ON DELETE CASCADE ON UPDATE CASCADE, ' +
    'name VARCHAR(64) REFERENCES category(name) ON DELETE CASCADE ON UPDATE CASCADE, ' +
    'PRIMARY KEY(pid, name) ' +
    ');';

const investsQuery = 
    'CREATE TABLE invests ( ' +
    'investor VARCHAR(32) REFERENCES users(username) ON DELETE SET NULL ON UPDATE CASCADE, ' +
    'pid SERIAL REFERENCES project(pid) ON DELETE SET NULL ON UPDATE CASCADE, ' +
    'amount BIGINT NOT NULL CHECK(amount > 0), ' +
    'date DATE ' +
    ');';

const fundedQuery = 
    'CREATE VIEW funded AS SELECT * ' +
    'FROM projects p ' +
    'WHERE p.amountreceived >= p.amountrequested;';

const investsUpdateFunctionQuery = 
    'CREATE OR REPLACE FUNCTION updateAmountReceived(pid SERIAL, amount BIGINT UNSIGNED) ' +
    'RETURNS TRIGGER AS $$ ' +
    'BEGIN ' +
    'UPDATE project p ' +
    'SET p.amountreceived = p.amountreceived + amount '
    'WHERE p.pid = pid; ' +
    'RETURN NEW; ' +
    'END; $$ ' +
    'LANGUAGE PLPGSQL;';

const investsUpdateTriggerQuery =
    'CREATE TRIGGER updateInvestment ' +
    'AFTER INSERT OR UPDATE ON invests ' +
    'FOR EACH ROW ' +
    'EXECUTE PROCEDURE updateAmountReceived(NEW.pid, NEW.amount);';

dbHelper.executeQueriesInOrder(userQuery, categoryQuery, projectQuery, hasCategoryQuery,
		investsQuery, fundedQuery, investsUpdateFunctionQuery, investsUpdateTriggerQuery)
	    .then(() => console.log("Make tables done!"));

//const investmentTriggerFunctionQuery =
//    'CREATE OR REPLACE FUNCTION addInvestmentTrigger()' +
//    ' RETURNS trigger AS ' +
//    ' $$' +
//    ' BEGIN' +
//    ' UPDATE project' +
//    ' SET funded = CASE WHEN (projectInvestment(pid) >= amountrequested) THEN true' +
//    ' WHEN (projectInvestment(pid) < amountrequested) THEN false' +
//    ' END' +
//    ' WHERE project.pid = NEW.project;' +
//    ' RETURN NULL;' +
//    'END;' +
//    '$$' +
//    'LANGUAGE \'plpgsql\';'
//
//const investmentTriggerQuery =
//    'CREATE TRIGGER check_funded ' +
//    'AFTER INSERT OR UPDATE ON investment ' +
//    'FOR EACH ROW ' +
//    'EXECUTE PROCEDURE addInvestmentTrigger();';
//
//const investmentFunctionQuery = 
//    'CREATE OR REPLACE FUNCTION projectInvestment(projectid INT UNSIGNED) ' +
//        'RETURNS DECIMAL AS $$ ' +
//        'DECLARE totalinvestment DECIMAL; ' +
//        'BEGIN ' +
//        'SELECT SUM(i.amount) INTO totalinvestment ' +
//        'FROM investment i, project p ' +
//        'WHERE projectid = p.pid ' +
//        'AND i.project = p.pid; ' +
//        'RETURN totalinvestment; ' +
//        'END; $$ ' +
//        'LANGUAGE PLPGSQL;';
//
//const projectTriggerFunctionQuery =
//    'CREATE OR REPLACE FUNCTION updateProjectTrigger()' +
//    ' RETURNS trigger AS ' +
//    ' $$' +
//    ' BEGIN' +
//    ' UPDATE project' +
//    ' SET funded = CASE WHEN (projectInvestment(pid) >= amountrequested) THEN true' +
//    ' WHEN (projectInvestment(pid) < amountrequested) THEN false' +
//    ' END' +
//    ' WHERE project.pid = NEW.pid;' +
//    ' RETURN NULL;' +
//    'END;' +
//    '$$' +
//    'LANGUAGE \'plpgsql\';'
//
//
//const projectTriggerQuery =
//    'CREATE TRIGGER check_funded2 ' +
//    'AFTER UPDATE OF amountrequested ON project ' +
//    'FOR EACH ROW ' +
//    'EXECUTE PROCEDURE updateProjectTrigger();';
//
//dbHelper.executeQueriesInOrder(catagoryQuery, userQuery, projectQuery, investmentQuery, 
//    investmentFunctionQuery, investmentTriggerFunctionQuery, investmentTriggerQuery,
//    projectTriggerFunctionQuery, projectTriggerQuery )
//    .then(() => console.log("Make tables done!"));