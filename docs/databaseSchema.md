# Database Schema

This project is created under the following problem scope:
```
Topic B, Crowdfunding: the system is a catalogue of projects looking for crowdfunding.
Entrepreneurs can advertise their projects (title, description, start date, duration, keywords or
categories, amount of funding sought). Users can browse the projects and fund projects. Users can
play both roles of entrepreneurs and investors. The system tracks the current amount of funding
raised, brings the project to the status of “funded” and advertises this success on a page of funded
project. Each user has an account. Administrators can create, modify and delete all entries. Please
refer to www.globalgiving.org, fundanything.com or other crowdfunding sites for examples and
data.
```

## ER Diagram

![basic er diagram](erdiagram.jpg)

## SQL Commands for the schema

UserAccounts table

```
CREATE TABLE users (
	username VARCHAR(32) PRIMARY KEY,
	fullname VARCHAR(64),
	email VARCHAR(256),
	dob DATE,
	country VARCHAR(64),
	admin BOOLEAN
	);
```

Catagories table

```
CREATE TABLE category (
	name VARCHAR(64) PRIMARY KEY,
	);
```

Projects table

```
CREATE TABLE project (
	pid INT PRIMARY KEY,
	creator REFERENCES account(username),
	title VARCHAR(256) NOT NULL,
	description VARCHAR(256),
	catagory REFERENCES catagory(name),
	startdate DATE NOT NULL,
	enddate DATE NOT NULL,,
	amountrequested INT CHECK(amountrequested > 0)
	);
```

Project categories table

```
CREATE TABLE project_category (
    pid INT REFERENCES project(pid),
    name VARCHAR(64) REFERENCES category(name)
    );
```

Investment table

```
CREATE TABLE invest (
	investor INT REFERENCES account(username),
	project INT REFERENCES project(pid),
	amount INT CHECK(amount > 0),
	date DATE NOT NULL
	);
```

Project Funding function

```
CREATE OR REPLACE FUNCTION projectInvestment(projectid INT)
    RETURNS DECIMAL AS $$
    DECLARE totalinvestment DECIMAL;
    BEGIN
    SELECT SUM(i.amount) INTO totalinvestment
    FROM investment i, project p
    WHERE projectid = p.pid
    AND i.project = p.pid;
    RETURN totalinvestment;
    END; $$
    LANGUAGE PLPGSQL;
```

addInvestmentTrigger function

```
CREATE OR REPLACE FUNCTION addInvestmentTrigger()
	RETURNS trigger AS 
	$$
	BEGIN
		UPDATE project
		SET funded =	CASE
						WHEN (projectInvestment(pid) >= amountrequested) THEN true
						WHEN (projectInvestment(pid) < amountrequested) THEN false
						END
		WHERE project.pid = NEW.project;
	END;
	$$
LANGUAGE 'plpgsql';

```

Trigger to update funded column in project

```
CREATE OR REPLACE TRIGGER check_funded
	AFTER UPDATE ON investment
	FOR EACH ROW
	BEGIN
		UPDATE project
		IF (projectInvestment(pid) >= amountrequested) THEN
			SET funded = TRUE;
		ELSEIF (projectInvestment(pid) < amountrequested) THEN
			SET funded = FALSE;
		END IF;
	END;
```

## Populating of database

Use the following commands to populate the table with test values

```
$ npm run droptables && npm run maketables && npm run populate
```

## Example data to populate database

As the project uses the PG module in Node.JS, the following SQL queries are written in JS string formats.

These files can be found under ../populate in this Repo

populateProject.js

```

exports.query =  
        'INSERT INTO project VALUES(\'1\', \'username00\', \'New arts and craft project\', \'this is a new way of doing arts and crafts\', \'1999-01-01\', \'2018-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'2\', \'username00\', \'SkateBar\', \'wanna go to the bar and skate at the same time?\', \'1999-01-01\', \'2018-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'3\', \'username02\', \'Solar Panel for LIFE\', \'100% no fuss solar panel\', \'1999-01-01\', \'2019-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'4\', \'username02\', \'Solar Panel Competitor\', \'the other panel is bad\', \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'5\', \'username05\', \'New books\', \'some title and author\', \'1999-01-01\', \'2019-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'6\', \'username05\', \'BBC Competitor\', \'we are BBD!\', \'1999-01-01\', \'2018-04-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'7\', \'username06\', \'New Clothes for all genders\', \'clothes for all genders~\', \'1999-01-06\', \'2018-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'8\', \'username05\', \'Another Movie by Famous Actor\', \'another movie\', \'1999-01-01\', \'2017-09-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'9\', \'username02\', \'Another App\', \'another app for another platform\', \'1999-01-01\', \'2018-11-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'10\', \'username05\', \'projectTitleFOOBAR\', \'BAR BAR FOO BAR HAVE YOU ANY NULL\', \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'11\', \'username12\', \'Promises life for all\', \'gatica\', \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'12\', \'username05\', \'projectTitleFOOBAR2\', \'YES SIR YES SIR NULL BAGS FOO\', \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'13\', \'username08\', \'Pottery\', \'pots and pans\', \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'14\', \'username05\', \'New android\', \'android version 20\', \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'15\', \'username05\', \'Sick RnB\', \'some form of music\', \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'16\', \'username12\', \'New Iphone\', \'ios version 30\', \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    ;

```