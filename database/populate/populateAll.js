require('dotenv').config();

const dbHelper = require('../dbHelper');
const userValues = require('./populateUser');
const catagoryValues = require('./populateCat');

dbHelper.executeQueriesInOrder(
    userValues.query,
    catagoryValues.query
);