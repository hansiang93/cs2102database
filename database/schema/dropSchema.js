require('dotenv').config();

const dbHelper = require('../dbHelper');

const accountQuery = 'DROP TABLE account;';
const categoryQuery = 'DROP TABLE category;';
const projectQuery = 'DROP TABLE project;';
const fundsQuery = 'DROP TABLE funds;';
const backerType = 'DROP TYPE backer_type;';

dbHelper.executeQueriesInOrder(backerType, fundsQuery, projectQuery, accountQuery, categoryQuery)
    .then( () => console.log("Drop/Delete tables done!") );
