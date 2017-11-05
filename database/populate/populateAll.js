require('dotenv').config();

const dbHelper = require('../dbHelper');
const userValues = require('./populateUser');
const categoryValues = require('./populateCat');
const projectValues = require('./populateProject');
const hasCatValues = require('./populateProjCat');
const investsValues = require('./populateInvest');

dbHelper.executeQueriesInOrder(
    userValues.query,
    categoryValues.query,
    projectValues.query,
    hasCatValues.query,
    investsValues.query
);