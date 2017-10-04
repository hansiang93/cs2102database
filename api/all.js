require('dotenv').config();

const pg = require('pg');
const express = require('express');
const executer = require('../database/dbExecuter.js');
const router = express.Router();

var username = '';


router.get('/categories', function(req, res) {
    var promise = executer.getCategories();
    promise.then(results => {
        return res.json(results.rows);
    });
})


router.get('/projects/:pid', function(req, res) {
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

router.delete('/projects/:id', function(req, res) {
    var promise = executer.deleteProjectById(req.params['pid']);
    promise.then(results => {
        console.log("deleting project " + results);
        return res.json('DELETE request to project: ' + pid);
    }).catch(function() {
        console.log("Promise rejected");
    });
})

router.get('/myprojects/:id', function(req, res) {
    console.log('projects by username: ', username);
    executer.getProjectByUser(req.params['id']).then(result => {
        let projects = result.rows;
        return res.json(projects);
    });
});


router.get('/user/:id', function(req, res) {
    var promise = executer.getUser(req.params['id']);
    promise.then(results => {
        return res.json(results.rows);
    });

});

router.delete('/user/:id', function(req, res) {
    var promise = executer.deleteUser(req.params['id']);
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

router.post('/login', function(req, res, next) {
    var promise = queryExecuter.getUser(req.body.username);
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