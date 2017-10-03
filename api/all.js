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


router.get('/projects/:id', function(req, res) {
    var promise = executer.getProjectById(req.params['id']);

    if (projects.rowCount == 0) {
        res.status(404).send('No such project');
        return;
    }
    let project = projects.rows[0];
    console.log(project);

    promise.then(results => {
        return res.json(results.rows);
    });
})


router.get('/myprojects/:id', function(req, res) {
    console.log('projects by username: ', username);
    executer.getProjectByUser(req.params['id']).then(result => {
        let projects = result.rows;
        return res.json(projects);
    });
});


router.get('/user', function(req, res) {

});

router.delete('/user:/id', function(req, res) {

});

router.post('/account', function(req, res, next) {
    var username = req.body.username;
    var fullname = req.body.fullname;
    var email = req.body.email;
    var dob = req.body.dob;
    var country = (req.body.country) ? req.body.country : '';
    var role = req.body.role;
    var promise = executer.addAccount(username, fullname, email, dob, country, role);
    promise.then(function(result) {
        res.redirect('/'); //redirect back to home
    });
});


module.exports = router;