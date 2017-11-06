require('dotenv').config();

const dbHelper = require('../dbHelper');

const userQuery = 'DROP TABLE users;';
const categoryQuery = 'DROP TABLE category;';
const fundedQuery = 'DROP VIEW funded;';
const projectQuery = 'DROP TABLE project;';
const hasCategoryQuery = 'DROP TABLE has;'
const investsQuery = 'DROP TABLE invests;';
const investsUpdateFunctionQuery = 'DROP FUNCTION updateAmountReceived();';
const investsUpdateTriggerQuery = 'DROP TRIGGER updateInvestment ON invests;';
const investsAddFunctionQuery = 'DROP FUNCTION addAmountReceived();';
const investsAddTriggerQuery = 'DROP TRIGGER addInvestment ON invests;';
const investsDeleteFunctionQuery = 'DROP FUNCTION deleteAmountReceived();';
const investsDeleteTriggerQuery = 'DROP TRIGGER deleteInvestment ON invests;';

dbHelper.executeQueriesInOrder(investsUpdateTriggerQuery, investsAddTriggerQuery,
		investsDeleteTriggerQuery, fundedQuery, hasCategoryQuery, investsQuery, 
		projectQuery, userQuery, categoryQuery, investsUpdateFunctionQuery, 
		investsAddFunctionQuery, investsDeleteFunctionQuery)
    .then( () => console.log("Drop/Delete tables done!") );
