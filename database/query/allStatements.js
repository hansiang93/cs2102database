// Project Statements

exports.ADD_PROJECT =
    'INSERT INTO project' +
    '(creator, title, description, category, startdate, enddate, amountrequested, amountreceived) ' +
    'VALUES($1, $2, $3, $4, $5, $6, $7, 0);';

exports.UPDATE_PROJECT =
    'UPDATE project ' +
    'SET title = $1, description = $2, category = $3, enddate = $4, amountrequested = $5 ' +
    'WHERE pid = $6;';

exports.REMOVE_PROJECT_CATEGORIES =
    'DELETE FROM has ' +
    'WHERE has.pid = $1;';

exports.ADD_PROJECT_CATEGORY =
    'INSERT INTO has(pid, name) ' +
    'VALUES($1, $2);';

exports.GET_ALL_PROJECTS =
    'SELECT pr.pid, pr.creator, pr.title, pr.description, ' +
    'to_char(pr.startdate, \'DD-MM-YYYY\'), ' +
    'to_char(pr.enddate, \'DD-MM-YYYY\'), pr.amountrequested, ' +
    'u.username, u.fullname, u.country ' +
    'FROM project pr, user u ' +
    'WHERE pr.creator = u.username ' +
    'ORDER BY pr.title;';

// Shows the top 12 funded projects
exports.GET_FEATURED_PROJECTS =
    'SELECT f.pid, f.creator, f.title, f.description, ' +
    'to_char(f.startdate, \'DD-MM-YYYY\'), ' +
    'to_char(f.enddate, \'DD-MM-YYYY\'), f.amountrequested, ' +
    '(f.amountreceived / f.amountrequested) AS percentage, ' +
    'u.username, u.fullname, u.country ' +
    'FROM funded f, user u ' +
    'WHERE f.creator = u.username ' +
    'ORDER BY percentage ASC ' +
    'LIMIT 12;';

exports.GET_ALL_PROJECTS_BY_CAT =
    'SELECT p.pid, p.creator, p.title, p.description, ' +
    'to_char(p.startdate, \'DD-MM-YYYY\'), ' +
    'to_char(p.enddate, \'DD-MM-YYYY\'), p.amountrequested, ' +
    'FROM project p, has h ' +
    'WHERE p.pid = h.pid AND h.name = $1 ' +
    'ORDER BY p.title;';

exports.GET_ALL_PROJECTS_BY_NAME =
    'SELECT p.pid, p.creator, p.title, p.description, ' +
    'to_char(p.startdate, \'DD-MM-YYYY\'), ' +
    'to_char(p.enddate, \'DD-MM-YYYY\'), p.amountrequested ' +
    'FROM project p ' +
    'WHERE p.title LIKE \'%$1%\' ' +
    'ORDER BY p.title;';

exports.GET_PROJECT_INVESTMENT_AMOUNT =
    'SELECT * FROM project pr WHERE pr.pid = $1;';

exports.GET_PROJECT_BY_ID =
    'SELECT pr.pid, pr.title, pr.description, pr.creator, pr.category, ' +
    'pr.startdate, pr.enddate, pr.amountrequested, ' +
    'DATE_PART(\'day\', pr.enddate::timestamp - pr.startdate::timestamp) as daysleft, ' +
    'pr.amountreceived AS amountfunded, ' +
    'u.fullname AS owner, u.country AS ownercountry, u.username AS ownerusername ' +
    'FROM project pr INNER JOIN user u ON pr.creator = u.username WHERE pr.pid = $1;';

// Gets all investments in a project 
exports.GET_PROJECT_BACKERS_BY_ID =
    'SELECT u.username, i.amount, i.date ' +
    'FROM user u, invests i ' +
    'WHERE i.investor = u.username ' +
    'AND i.pid = $1 ' +
    'ORDER BY i.date;';

exports.GET_PROJECT_BY_USER =
    'SELECT * FROM project pr, user u ' +
    'WHERE pr.creator = u.username ' +
    'AND u.username = $1;';

exports.GET_PROJECTS_FUNDED =
    'SELECT * FROM funded;';

exports.GET_PROJECTS_UNFUNDED =
    'SELECT * FROM project ' + 
    'EXCEPT ' + 
    'SELECT * FROM funded;';

exports.DELETE_PROJECT =
    'DELETE FROM project pr WHERE pr.pid = $1;';

// User Statements

exports.ADD_USER =
    'INSERT INTO user' +
    '(username, fullname, email, dob, country, admin)' +
    ' VALUES($1, $2, $3, $4, $5, $6);';

exports.GET_ALL_USERS =
    'SELECT * FROM user;';

exports.GET_USER =
    'SELECT * FROM user WHERE username = $1;';

exports.DELETE_USER =
    'DELETE FROM user WHERE username = $1;';

exports.GET_USER_PROJECTS_INVESTED =
    'SELECT p.title, SUM(i.amount) AS invested ' +
    'FROM project p, invests i ' +
    'WHERE p.pid = i.pid ' +
    'AND i.investor = $1 ' +
    'GROUP BY p.title;';


// Other APIs

exports.GET_CATEGORIES =
    'SELECT * FROM category ORDER BY name;';

// Add a category with no description
exports.ADD_CATEGORY =
    'INSERT INTO category' +
    '(name) ' +
    'VALUES($1);';

// Add a category with description
exports.ADD_CATEGORY_WITH_DESC =
	'INSERT INTO category' +
	'(name, description) ' +
	'VALUES($1, $2);';
	
exports.ADD_INVESTMENT =
    'INSERT INTO invests' +
    '(investor, pid, amount, date) ' +
    'VALUES($1, $2, $3, CURRENT_DATE);';

// Will break the system because the trigger does not account for deletion
/*exports.DELETE_INVESTMENT =
    'DELETE FROM invests ' +
    'WHERE id = $1;';
*/

// Fun stats?

exports.GET_INVESTMENTS_BY_MONTH =
    'SELECT TO_CHAR(i.date, \'MM\'), SUM(i.amount) ' +
    'FROM invests i ' +
    'WHERE TO_CHAR(i.date, \'YYYY\') = $1 ' +
    'GROUP BY TO_CHAR(i.date, \'MM\') ' +
    'ORDER BY 1;';

exports.GET_INVESTMENTS_BY_YEAR =
    'SELECT TO_CHAR(i.date, \'YYYY\'), SUM(i.amount) ' +
    'FROM invests i ' +
    'GROUP BY TO_CHAR(i.date, \'YYYY\') ' +
    'ORDER BY 1;';



exports.GET_INVEST_AMOUNT_LEADERBOARD =
    'SELECT u.username, SUM(i.amount) AS totalinvestment ' +
    'FROM user u, invests i ' +
    'WHERE i.investor = u.username ' +
    'GROUP BY u.username ' +
    'ORDER BY totalinvestment DESC;';

exports.GET_INVEST_AMOUNT_TOTAL =
    'SELECT SUM(i.amount) AS totalinvestment ' +
    'FROM invests i;';

exports.GET_INVEST_PROJECT_LEADERBOARD =
    'SELECT u.username, COUNT(DISTINCT i.pid) AS numberProjects ' +
    'FROM user u, invests i ' +
    'WHERE i.investor = u.username ' +
    'GROUP BY u.username ' +
    'ORDER BY numberProjects DESC;';

exports.GET_INVEST_PROJECT_TOTAL =
    'SELECT COUNT(DISTINCT i.project) AS numberProjectsInvested ' +
    'FROM invests i;';