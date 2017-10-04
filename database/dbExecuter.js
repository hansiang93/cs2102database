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


exports.addProject = function addProject(username, full_name, email, dob,
    country, role) {
    console.log('Attemping to add project under ' + username);
    return executeAndLog(queries.ADD_PROJECT, [
        pid, creator, title, description, category, startdate, enddate, amountrequest
    ]);
}

exports.deleteProjectById = function(pid) {
    return executeAndLog(queries.DELETE_PROJECT, [pid]);
}

exports.addInvest = function addInvest(username, project, amount,
    date) {

    console.log('Attemping to add account ' + username);
    return executeAndLog(queries.ADD_INVEST, [
        username, project, amount, date
    ]);
}

exports.getProjectById = function(pid) {
    return executeAndLog(queries.GET_PROJECT_BY_ID, [pid]);
}

exports.getProjectByUser = function(username) {
    return executeAndLog(queries.GET_PROJECT_BY_USER, [username]);
}

exports.getCategories = function() {
    console.log('attempting to get all available categories');
    return executeAndLog(queries.GET_CATEGORIES);
}

