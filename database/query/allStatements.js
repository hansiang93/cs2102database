exports.ADD_USER =
    'INSERT INTO users' +
    ' (username, full_name, email, dob, country, admin)' +
    ' VALUES($1, $2, $3, $4, $5, $6)';

exports.ADD_PROJECT =
    'INSERT INTO project' +
    ' (pid, creator, title, description, category, startdate, enddate, amountrequested)' +
    ' VALUES($1, $2, $3, $4, $5, $6, $7, $8)';

exports.UPDATE_PROJECT =
    'UPDATE project ' +
    ' SET title = $1, description = $2, category = $3, startdate = $4, enddate = $5, amountrequested = $6' +
    ' WHERE pid = $7';

exports.ADD_CATEGORY =
    'INSERT INTO category ' +
    ' (category)' +
    ' VALUES($1)';

exports.ADD_INVESTMENT =
    'INSERT INTO invest' +
    ' (id, investor, project, amount, date)' +
    ' VALUES ($1, $2, $3, $4, $5)';

exports.GET_ALL_USER =
    'SELECT * FROM users';

exports.GET_CATEGORIES =
    'SELECT * FROM category ORDER BY name';

exports.GET_USER =
    'SELECT * FROM users WHERE username = $1';

exports.GET_ALL_PROJECT =
    'SELECT * FROM project';

exports.GET_PROJECT_BY_ID =
    'SELECT * FROM project pr WHERE pr.pid = $1';

exports.GET_PROJECT_BY_USER =
    'SELECT * FROM project pr WHERE pr.creator = $1';

exports.DELETE_USER =
    'DELETE FROM users WHERE username = $1';

exports.DELETE_PROJECT =
    'DELETE FROM project pr WHERE pr.pid = $1';