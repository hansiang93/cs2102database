require('dotenv').config();

const dbHelper = require('../dbHelper');
const userValues = require('./populateUser');
const catagoryValues = require('./populateCat');
const projectValues = require('./populateProject');

dbHelper.executeQueriesInOrder(
    userValues.query,
    catagoryValues.query,
    projectValues.query
);