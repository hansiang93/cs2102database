// Project Statements

exports.ADD_PROJECT =
    'INSERT INTO project' +
    ' (pid, creator, title, description, startdate, enddate, amountrequested, funded)' +
    ' VALUES($1, $2, $3, $4, CURRENT_DATE, $5, $6, FALSE);';

exports.UPDATE_PROJECT =
    'UPDATE project ' +
    ' SET title = $1, description = $2, category = $3, enddate = $4, amountrequested = $5' +
    ' WHERE pid = $6';

exports.REMOVE_PROJECT_CATEGORIES =
    'DELETE FROM project_category ' +
    'WHERE pid = $1';

exports.ADD_PROJECT_CATEGORY =
    'INSERT INTO project_category ' +
    ' (pid, name)' +
    ' VALUES($1, $2)';

exports.GET_ALL_PROJECTS =
    'SELECT pid, creator, title, description,' +
    ' to_char(startdate, \'DD-MM-YYY\'),' +
    ' to_char(enddate, \'DD-MM-YYY\'), amountrequested' +
    ' FROM project' +
    ' ORDER BY title';

exports.GET_ALL_PROJECTS_BY_CAT =
    'SELECT pid, creator, title, description,' +
    ' to_char(startdate, \'DD-MM-YYY\'),' +
    ' to_char(enddate, \'DD-MM-YYY\'), amountrequested' +
    ' FROM project p, project_category pc' +
    ' WHERE p.pid = pc.pid' +
    ' AND pc.name LIKE %$1%' +
    ' ORDER BY title';

exports.GET_ALL_PROJECTS_BY_NAME =
    'SELECT pid, creator, title, description,' +
    ' to_char(startdate, \'DD-MM-YYY\'),' +
    ' to_char(enddate, \'DD-MM-YYY\'), amountrequested' +
    ' FROM project p' +
    ' WHERE p.name LIKE %$1%' +
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

exports.GET_USER_PROJECTS_INVESTED =
    'SELECT p.title, SUM(i.amount) AS invested' +
    ' FROM project p, investment i' +
    ' WHERE p.pid = i.project' +
    ' AND i.investor = $1' +
    ' GROUP BY p.title;';


// Other APIs

exports.GET_CATEGORIES =
    'SELECT * FROM category ORDER BY name';

exports.ADD_CATEGORY =
    'INSERT INTO category ' +
    ' (category)' +
    ' VALUES($1)';
    
exports.ADD_INVESTMENT =
    'INSERT INTO investment' +
    ' (id, investor, project, amount, date)' +
    ' VALUES ($1, $2, $3, $4, CURRENT_DATE)';

exports.DELETE_INVESTMENT =
    'DELETE FROM investment' +
    ' WHERE id = $1;';


// Fun stats?

exports.GET_INVESTMENTS_BY_MONTH =
    'SELECT TO_CHAR(date, \'MM\'), SUM(amount)' +
    ' FROM investment' +
    ' GROUP BY TO_CHAR(date, \'MM\')' +
    ' ORDER BY 1;'

exports.GET_INVESTMENTS_BY_DAY =
    'SELECT TO_CHAR(date, \'DD\'), SUM(amount)' +
    ' FROM investment' +
    ' GROUP BY TO_CHAR(date, \'DD\')' +
    ' ORDER BY 1;'

exports.GET_INVEST_AMOUNT_LEADERBOARD =
    'SELECT u.username, SUM(i.amount) AS totalinvestment' +
    ' FROM users u, investment i' +
    ' WHERE i.investor = u.username' +
    ' GROUP BY u.username' +
    ' ORDER BY totalinvestment;';

exports.GET_INVEST_PROJECT_LEADERBOARD =
    'SELECT u.username, COUNT(DISTINCT i.project) AS numberProjects' +
    ' FROM users u, investment i' +
    ' WHERE i.investor = u.username' +
    ' GROUP BY u.username' +
    ' ORDER BY numberProjects;';