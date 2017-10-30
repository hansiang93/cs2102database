require('dotenv').config();

const dbHelper = require('../dbHelper');

const userQuery = 'DROP TABLE users;';
const catagoryQuery = 'DROP TABLE category;';
const projectQuery = 'DROP TABLE project;';
const investmentQuery = 'DROP TABLE investment;';
const investmentViewQuery = 'DROP FUNCTION projectInvestment(INT);';

dbHelper.executeQueriesInOrder(investmentViewQuery, investmentQuery, projectQuery, userQuery, catagoryQuery)
    .then( () => console.log("Drop/Delete tables done!") );
