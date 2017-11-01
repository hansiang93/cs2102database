require('dotenv').config();

const pg = require('pg');
const express = require('express');
const executer = require('../database/dbExecuter.js');
const router = express.Router();

var username = '';

// Project APIs

router.get('/allprojects', function(req, res) {
    var promise = executer.getAllProjects();
    promise.then(results => {
        return res.json(results.rows);
    });
});

router.get('/project/:pid', function(req, res) {
    var promise = executer.getProjectById(req.params['pid']);
    promise.then(results => {
        let projects = results;
        if (projects.rowCount == 0) {
            res.status(404).send('No such project');
            return;
        }
        let project = projects.rows[0];
        console.log(project);
        return res.json(project);
    }).catch(function() {
        console.log("No such project");
    });
})

router.get('/allprojects/funded', function(req, res) {
    var promise = executer.getFundedProjects();
    promise.then(results => {
        return res.json(results.rows);
    });
});

router.get('/allprojects/ongoing', function(req, res) {
    var promise = executer.getUnFundedProjects();
    promise.then(results => {
        return res.json(results.rows);
    });
});


router.delete('/projects/:pid', function(req, res) {
    var promise = executer.deleteProjectById(req.params['pid']);
    promise.then(results => {
        console.log("deleting project " + results);
        return res.json('DELETE request to project: ' + pid);
    }).catch(function() {
        console.log("Promise rejected");
    });
})

router.post('/project', function (req, res, next) {
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

router.post('/projects/:pid', function (req, res, next) {
  var projectId = parseInt(req.params.pid);
  var title = req.body.title;
  var category = req.body.category;
  var description = req.body.description;
  var start_date = req.body.startdate;
  var end_date = req.body.enddate;
  var amount_sought = req.body.amountrequested;
  var owner_account = req.body.creator;
  console.log(req.body);
  var promise = executer.updateProject(
    projectId, title, category, description, start_date, end_date, amount_sought
    );
  promise.then(function() {
    res.redirect('/projects/' + projectId); // to project page
  });
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
    console.log('projects by username: ', username);
    executer.getProjectByUser(req.params['id']).then(result => {
        let projects = result.rows;
        return res.json(projects);
    });
});

// Investing APIs

router.post('/invest', function (req, res, next) {
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

// Other APIs

router.get('/categories', function(req, res) {
    var promise = executer.getCategories();
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