require('dotenv').config();

const pg = require('pg');
const express = require('express');
const executer = require('../database/dbExecuter.js');
const Rx = require('rx');
const moment = require('moment');
const capitalize = require('capitalize');


const router = express.Router();

var username = '';
var errorMessage = '';



router.get('/', function(req, res) {
    let categoryObs = Rx.Observable.fromPromise(executer.getCategories());
    let projectsObs = Rx.Observable.fromPromise(executer.getAllProjects());
    Rx.Observable.zip(categoryObs, projectsObs).subscribe(
        (results) => {
            // this will only be executed once all the queries are done
            let categories = results[0].rows;
            let projects = results[1].rows;
            res.render('pages/main', {
                username: username,
                categories: categories,
                projects: projects,
                error: errorMessage
            });
            errorMessage = '';
        },
        (error) => {
            console.log(error);
        }
    );
});

// Project APIs

router.get('/projects', function(req, res) {
    var projects = [];
    console.log(req.query);
    var title = req.query.title ? req.query.title : '';
    var categories = req.query.categories ? req.query.categories : [];
    if (typeof(categories) == 'string') {
        categories = [categories];
    }
    var params = {
        title: title,
        categories: categories
    };
    var promise = executer.getAllProjects();
    promise.then(results => {
        projects = results.rows;
        res.render('pages/search', {
            username: username,
            params: params,
            projects: projects,
            error: errorMessage
        });
        errorMessage = '';
    });
});

router.get('/projects/:category', function(req, res) {
    var promise = executer.getAllProjectsByCat(req.params['category']);
    promise.then(results => {
        return res.json(results.rows);
    });
});

router.get('/projects/:name', function(req, res) {
    var promise = executer.getAllProjectsByName(req.params['name']);
    promise.then(results => {
        return res.json(results.rows);
    });
});

router.get('/project/:pid', function(req, res) {
    var projectId = req.params.pid;
    var promise = executer.getProjectById(projectId);
    promise.then(results => {
        // let projects = results;
        // if (projects.rowCount == 0) {
        //     res.status(404).send('No such project');
        //     return;
        // }
        // let project = projects.rows[0];
        // console.log(project);
        // return res.json(project);
        var result = results.rows[0];
        console.log(result);

        res.render('pages/viewProject', {
            projectId: projectId,
            username: username,
            title: result.title,
            description: result.description,
            owner_account: result.owner_account,
            category: result.category,
            start_date: result.start_date,
            end_date: result.end_date,
            days_left: result.days_left,
            backers: result.backers,
            amount_sought: result.amount_sought,
            amount_funded: result.amount_funded,
            //TODO: do this in sql query instead?
            is_funded: parseInt(result.amount_sought) < parseInt(result.amount_funded),
            //TODO: do this in sql query instead?
            percent_funded: parseFloat(parseFloat(result.amount_funded) / parseFloat(result.amount_sought) * 100).toFixed(2),
            owner: result.owner,
            owner_country: result.owner_country,
            owner_description: result.owner_description,
            error: errorMessage
        });
        errorMessage = '';
    }).catch(function() {
        console.log("No such project");
    });
})

router.get('/projects/funded', function(req, res) {
    var promise = executer.getFundedProjects();
    promise.then(results => {
        return res.json(results.rows);
    });
});

router.get('/projects/ongoing', function(req, res) {
    var promise = executer.getUnFundedProjects();
    promise.then(results => {
        return res.json(results.rows);
    });
});


router.delete('/project/:pid', function(req, res) {
    var promise = executer.deleteProjectById(req.params['pid']);
    promise.then(results => {
        console.log("deleting project " + results);
        return res.json('DELETE request to project: ' + pid);
    }).catch(function() {
        console.log("Promise rejected");
    });
})

router.post('/project', function(req, res, next) {
    var projectId = req.body.pid;
    var username = req.body.username;
    var title = req.body.title;
    var description = req.body.description;
    var end_date = req.body.enddate;
    var amount_sought = req.body.amountrequested;
    var category = req.body.category; // yet to do category adding
    console.log(req.body);
    var promise = executer.addProject(
        projectId, username, title, description, end_date, amount_sought
    );
    promise.then(function() {
        res.redirect('/projects/' + projectId); // to project page
    });

});

router.post('/projects/:pid', function(req, res, next) {
    var projectId = parseInt(req.params.pid);
    var title = req.body.title;
    var project_categories = req.body.category;
    var description = req.body.description;
    var end_date = req.body.enddate;
    var amount_sought = req.body.amountrequested;
    var owner_account = req.body.creator;
    console.log(req.body);
    var promise = executer.updateProject(
        projectId, title, category, description, end_date, amount_sought
    );
    promise.then(function() {
        res.redirect('/projects/' + projectId); // to project page
    });
    if (project_categories.length > 0) {
        executer.removeProjectCategories(projectId); // removes all project categories and replaces them
        project_categories.forEach(function(element) {
            executer.addProjectCategory(
                projectId, element
            );
        });
    }
});


// User APIs

router.get('/allusers', function(req, res) {
    var promise = executer.getAllUsers();
    promise.then(results => {
        return res.json(results.rows);
    });
});

router.post('/register', function(req, res, next) {
    var username = req.body.username;
    var fullname = req.body.fullname;
    var email = req.body.email;
    var dob = req.body.dob;
    var country = (req.body.country) ? req.body.country : '';
    var role = req.body.role;
    var promise = executer.addUser(username, fullname, email, dob, country, role);
    promise.then(function(result) {
        res.redirect('/'); //redirect back to home
    });
});

router.get('/user/:id', function(req, res) {
    var promise = executer.getUser(req.params['id']);
    promise.then(results => {
        return res.json(results.rows);
    });
});

router.delete('/user/:username', function(req, res) {
    var promise = executer.deleteUser(req.params['username']);
    promise.then(results => {
        return res.json(results.rows);
    });

});

router.get('/myprojects/:id', function(req, res) {
    console.log('projects by username: ' + req.params['id']);
    executer.getProjectByUser(req.params['id']).then(result => {
        let projects = result.rows;
        return res.json(projects);
    });
});

router.get('/investments/:id', function(req, res) {
    console.log('projects and investments: ' + req.params['id']);
    executer.getProjectInvestedByUser(req.params['id']).then(result => {
        let projects = result.rows;
        return res.json(projects);
    });
});


// Investing APIs

router.post('/invest', function(req, res, next) {
    var invest_id = req.body.invest_id
    var investor = req.body.username;
    var project_id = parseInt(req.params.id);
    var amount = req.body.amount;
    console.log(req.body);
    var promise = executer.investProject(
        invest_id, investor, project_id, amount
    );
    promise.then(function() {
        res.redirect('/projects/' + projectId); // to project page
    });
});

router.delete('/invest/:id', function(req, res, next) {
    var invest_id = parseInt(req.params.id);
    var promise = executer.deleteInvestment(
        invest_id
    );
    promise.then(function() {
        res.redirect('/'); // to main page
    });
});
// Other APIs

router.get('/categories', function(req, res) {
    var promise = executer.getCategories();
    promise.then(results => {
        return res.json(results.rows);
    });
})

router.post('/categories', function(req, res, next) {
    var category = req.body.category;
    var promise = executer.addCategory(
        category
    );
    promise.then(function() {
        res.redirect('/'); // to main page
    });
});

router.get('/invest/stats/month', function(req, res) {
    var promise = executer.getInvestmentsByMonthStats();
    promise.then(results => {
        return res.json(results.rows);
    });
})

router.get('/invest/stats/day', function(req, res) {
    var promise = executer.getInvestmentsByDayStats();
    promise.then(results => {
        return res.json(results.rows);
    });
})

router.get('/leaderboard/amount', function(req, res) {
    var promise = executer.getAmountLeaderboard();
    promise.then(results => {
        return res.json(results.rows);
    });
})

router.get('/leaderboard/projects', function(req, res) {
    var promise = executer.getProjectsLeaderboard();
    promise.then(results => {
        return res.json(results.rows);
    });
})

router.post('/login', function(req, res, next) {
    var promise = executer.getUser(req.body.username);
    promise.then(results => {
        if (results.rows.length > 0) {
            username = results.rows[0].username;
        } else {
            errorMessage = 'Your username is not registered.';
        }
        res.redirect(req.get('referer'));
    });
});

router.get('/logout', function(req, res, next) {
    if (username !== "") username = "";
    res.redirect(req.get('referer'));
});

module.exports = router;