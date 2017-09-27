# Alpha App for CS2102


### Initial Commit for CS2102 db alpha project

app name: cs2102database


### Setup

initialise your setup by 
> npm install

or 

> sudo npm install

The MySQL setup was based off of the following tutorial: 
> https://www.sitepoint.com/using-node-mysql-javascript-client/

Install MySQL
> https://dev.mysql.com/doc/refman/5.7/en/installing.html

The schema name used for this project in testingDB.js within MySQL is
'cs2102'
This allows for a MySQL desktop application to be used for the injection of databases

alternative DB to use is PostgreSQL by following
> http://mherman.org/blog/2015/02/12/postgresql-and-nodejs/

This would allow for the independence of a SQL server running on the application desktop

### Run the app
> DEBUG=cs2102database:* npm start

view the app on a browser at 
> http://localhost:3000/