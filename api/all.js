require('dotenv').config();

const pg = require('pg');
const express = require('express');

const executer = require('../database/dbExecuter.js');
const router = express.Router();



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

module.exports = router;