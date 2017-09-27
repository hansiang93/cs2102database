// app.js
const mysql = require('mysql');

// First you need to create a connection to the db
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'phuahansiang',
    database: 'cs2102'
});

con.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});





con.query('SELECT * FROM employees', (err, rows) => {
    if (err) throw err;

    console.log('Data received from Db:\n');
    rows.forEach((row) => {
        console.log(`${row.name} is in ${row.location}`);
    });
});

const employee = { name: 'Winnie', location: 'Australia' };
con.query('INSERT INTO employees SET ?', employee, (err, res) => {
    if (err) throw err;

    console.log('Last insert ID:', res.insertId);
});
con.query(
    'UPDATE employees SET location = ? Where ID = ?', ['South Africa', 5],
    (err, result) => {
        if (err) throw err;

        console.log(`Changed ${result.changedRows} row(s)`);
    }
);
con.query(
    'DELETE FROM employees WHERE id = ?', [5], (err, result) => {
        if (err) throw err;

        console.log(`Deleted ${result.affectedRows} row(s)`);
    }
);



const userLandVariable = '4 ';

con.query(
  `SELECT * FROM employees WHERE id = ${userLandVariable}`,
  (err, rows) => {
    if(err) throw err;
    console.log(rows);
  }
);



con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
});