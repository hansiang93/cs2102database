exports.ADD_USER =
    'INSERT INTO users' +
    ' (username, full_name, email, dob, country, admin)' +
    ' VALUES($1, $2, $3, $4, $5, $6)';

exports.ADD_PROJECT =
    'INSERT INTO project' +
    ' (pid, creator, title, description, category, startdate, enddate, amountrequest)' +
    ' VALUES($1, $2, $3, $4, $5, $6, $7, $8)';

exports.ADD_CATEGORY =
    'INSERT INTO category ' +
    ' (category)' +
    ' VALUES($1)';

exports.ADD_INVEST =
    'INSERT INTO invest' +
    ' (investor, project, amount, date)' +
    ' VALUES ($1, $2, $3, $4)';

exports.GET_CATEGORIES =
    'SELECT * FROM category ORDER BY name';

exports.GET_USER =
    'SELECT * FROM users WHERE username = $1';

exports.GET_ALL_PROJECTS = 
    'SELECT * FROM project';

exports.GET_PROJECT_BY_ID =
    'SELECT * FROM project pr WHERE pr.pid = $1';

exports.GET_PROJECT_BY_USER =
    'SELECT * FROM project pr WHERE pr.creator = $1';

exports.DELETE_USER =
    'DELETE FROM users WHERE username = $1';
    
exports.DELETE_USER =
    'DELETE FROM users WHERE username = $1';