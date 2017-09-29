require('dotenv').config();

const dbHelper = require('../dbHelper');

const userQuery = 'DROP TABLE users;';
const catagoryQuery = 'DROP TABLE catagory;';
const projectQuery = 'DROP TABLE project;';
const investmentQuery = 'DROP TABLE investment;';

dbHelper.executeQueriesInOrder(investmentQuery, projectQuery, userQuery, catagoryQuery)
    .then( () => console.log("Drop/Delete tables done!") );
