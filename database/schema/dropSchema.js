require('dotenv').config();

const dbHelper = require('../dbHelper');

const userQuery = 'DROP TABLE user;';
const categoryQuery = 'DROP TABLE category;';
const fundedQuery = 'DROP VIEW funded;';
const projectQuery = 'DROP TABLE project;';
const hasCategoryQuery = 'DROP TABLE has;'
const investsQuery = 'DROP TABLE invests;';
const investsUpdateFunctionQuery = 'DROP FUNCTION updateAmountReceived;';
const investsUpdateTriggerQuery = 'DROP TRIGGER updateInvestment;';

dbHelper.executeQueriesInOrder(investsUpdateTriggerQuery, investsUpdateFunctionQuery, 
		fundedQuery, hasCategoryQuery, investsQuery, projectQuery, userQuery, categoryQuery)
    .then( () => console.log("Drop/Delete tables done!") );
