exports.ADD_CATEGORY =
    'INSERT INTO category ' +
    ' (category)' +
    ' VALUES($1)';

exports.GET_CATEGORIES =
    'SELECT * FROM category ORDER BY name';

exports.ADD_INVESTMENT =
    'INSERT INTO invest' +
    ' (id, investor, project, amount, date)' +
    ' VALUES ($1, $2, $3, $4, CURRENT_DATE)';

// Project Statements

exports.ADD_PROJECT =
    'INSERT INTO project' +
    ' (pid, creator, title, description, startdate, enddate, amountrequested, funded)' +
    ' VALUES($1, $2, $3, $4, CURRENT_DATE, $5, $6, FALSE);';

exports.UPDATE_PROJECT =
    'UPDATE project ' +
    ' SET title = $1, description = $2, category = $3, startdate = $4, enddate = $5, amountrequested = $6' +
    ' WHERE pid = $7';

exports.GET_ALL_PROJECTS =
    'SELECT pid, creator, title, description, category,' +
    ' to_char(startdate, \'DD-MM-YYY\'),' + 
    ' to_char(enddate, \'DD-MM-YYY\'), amountrequested' +
    ' FROM project' +
    ' ORDER BY title';

exports.GET_PROJECT_INVESTMENT_AMOUNT =
    'SELECT * FROM project pr WHERE pr.pid = $1';

exports.GET_PROJECT_BY_ID =
    'SELECT * FROM project pr WHERE pr.pid = $1';

exports.GET_PROJECT_BY_USER =
    'SELECT * FROM project pr WHERE pr.creator = $1';

exports.GET_PROJECTS_FUNDED =
    'SELECT * FROM project pr WHERE pr.funded = TRUE';

exports.GET_PROJECTS_UNFUNDED =
    'SELECT * FROM project pr WHERE pr.funded = FALSE';

exports.DELETE_PROJECT =
    'DELETE FROM project pr WHERE pr.pid = $1';

// User Statements

exports.ADD_USER =
    'INSERT INTO users' +
    ' (username, full_name, email, dob, country, admin)' +
    ' VALUES($1, $2, $3, $4, $5, $6)';

exports.GET_ALL_USERS =
    'SELECT * FROM users';

exports.GET_USER =
    'SELECT * FROM users WHERE username = $1';

exports.DELETE_USER =
    'DELETE FROM users WHERE username = $1';