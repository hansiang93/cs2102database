require('dotenv').config();

const pg = require('pg');
const queries = require('./query/allStatements');
const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

function executeAndLog(query, args) {
    let summary = query.substring(0, 50);
    console.log("%s...: EXECUTING", summary);
    console.log(query);
    let promise = pool.query(query, args).then(result => {
        console.log("%s...: SUCCESS. Returned %d rows.", summary, result.rowCount);
        return result;
    }).catch(e => {
        console.log("%s...: ERROR. Reason: %s %s", summary, e.name, e.message);
    });
    return promise;
}


exports.getAllProjects = function() {
    return executeAndLog(queries.GET_ALL_PROJECTS);
}

exports.getProjectById = function(pid) {
    return executeAndLog(queries.GET_PROJECT_BY_ID, [pid]);
}

exports.getFundedProjects = function() {
    return executeAndLog(queries.GET_PROJECTS_FUNDED);
}

exports.getUnFundedProjects = function() {
    return executeAndLog(queries.GET_PROJECTS_UNFUNDED);
}

exports.deleteProjectById = function(pid) {
    return executeAndLog(queries.DELETE_PROJECT, [pid]);
}

exports.addProject = function addProject(pid, username, title, description, enddate,
    amountrequested) {
    console.log('Attemping to add project under ' + username);
    return executeAndLog(queries.ADD_PROJECT, [
        pid, username, title, description, enddate, amountrequest
    ]);
}

exports.updateProject = function (pid, title, category, description,
    start_date, end_date, amount_sought) {

    console.log('attemping to edit project ' + pid + ': ' + title);
    return executeAndLog(queries.UPDATE_PROJECT, [
        title, description, category, start_date, end_date, amount_sought, pid
    ]);
}

exports.getProjectInvestment = function() {
    return executeAndLog(queries.GET_PROJECT_INVESTMENT_AMOUNT);
}

// USERs

exports.getAllUsers = function() {
    return executeAndLog(queries.GET_ALL_USERS);
}

exports.addUser = function addUser(username, full_name, email, dob,
    country, role) {

    console.log('Attemping to add account ' + username);
    return executeAndLog(queries.ADD_USER, [
        username, full_name, email, dob, country, role
    ]);
}

exports.getUser = function(username) {
    return executeAndLog(queries.GET_USER, [username]);
}

exports.deleteUser = function(username) {
    return executeAndLog(queries.DELETE_USER, [username]);
}

exports.getProjectByUser = function(username) {
    return executeAndLog(queries.GET_PROJECT_BY_USER, [username]);
}


// Investing

exports.investProject = function (invest_id, investor, project_id, 
    amount, invest_date) {
        console.log('Attemping to add investment under project id ' + project_id);
    return executeAndLog(queries.ADD_INVESTMENT, [
       invest_id, investor, project_id, amount, invest_date
    ]);
}

// Others

exports.getCategories = function() {
    console.log('attempting to get all available categories');
    return executeAndLog(queries.GET_CATEGORIES);
}

