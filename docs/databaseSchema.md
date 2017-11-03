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
CREATE TABLE investment (
    id INT PRIMARY KEY,
    investor VARCHAR(32) REFERENCES users(username) ON DELETE SET NULL,
    project INT REFERENCES project(pid) ON DELETE SET NULL,
    amount DECIMAL CHECK(amount > 0),
    date DATE
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
		SET funded = CASE
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


populateUser.js

```
exports.query =  
        'INSERT INTO users VALUES(\'username00\', \'full name\',
         \'email@email.com\', \'1999-01-01\', \'Singapore\', false);'
    +   'INSERT INTO users VALUES(\'username01\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', false);'
    +   'INSERT INTO users VALUES(\'username02\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', false);'
    +   'INSERT INTO users VALUES(\'username03\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', false);'
    +   'INSERT INTO users VALUES(\'username04\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', false);'
    +   'INSERT INTO users VALUES(\'username05\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', false);'
    +   'INSERT INTO users VALUES(\'username06\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', false);'
    +   'INSERT INTO users VALUES(\'username07\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', false);'
    +   'INSERT INTO users VALUES(\'username08\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', false);'
    +   'INSERT INTO users VALUES(\'username09\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', false);'
    +   'INSERT INTO users VALUES(\'username10\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', false);'
    +   'INSERT INTO users VALUES(\'username11\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', false);'
    +   'INSERT INTO users VALUES(\'username12\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', false);'
    +   'INSERT INTO users VALUES(\'admin01\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', true);'
    +   'INSERT INTO users VALUES(\'admin02\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', true);'
    +   'INSERT INTO users VALUES(\'admin03\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', true);'
    +   'INSERT INTO users VALUES(\'admin04\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', true);'
    +   'INSERT INTO users VALUES(\'admin05\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', true);'
    +   'INSERT INTO users VALUES(\'admin06\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', true);'
    +   'INSERT INTO users VALUES(\'admin07\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', true);'
    +   'INSERT INTO users VALUES(\'admin08\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', true);'
    +   'INSERT INTO users VALUES(\'admin09\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', true);'
    +   'INSERT INTO users VALUES(\'admin10\', \'full name\',
     \'email@email.com\', \'1999-01-01\', \'Singapore\', true);'
    ;

```


populateCat.js

```
exports.query =  
        'INSERT INTO category VALUES(\'Art\');'
    +   'INSERT INTO category VALUES(\'Comics\');'
    +   'INSERT INTO category VALUES(\'Crafts\');'
    +   'INSERT INTO category VALUES(\'Dance\');'
    +   'INSERT INTO category VALUES(\'Design\');'
    +   'INSERT INTO category VALUES(\'Fashion\');'
    +   'INSERT INTO category VALUES(\'Film & Video\');'
    +   'INSERT INTO category VALUES(\'Food\');'
    +   'INSERT INTO category VALUES(\'Games\');'
    +   'INSERT INTO category VALUES(\'Journalism\');'
    +   'INSERT INTO category VALUES(\'Music\');'
    +   'INSERT INTO category VALUES(\'Photography\');'
    +   'INSERT INTO category VALUES(\'Publishing\');'
    +   'INSERT INTO category VALUES(\'Technology\');'
    +   'INSERT INTO category VALUES(\'Theater\');'
    ;

```




populateProject.js

```

exports.query =  
        'INSERT INTO project VALUES(\'1\', \'username00\',
         \'New arts and craft project\', \'this is a new way of doing arts and crafts\',
          \'1999-01-01\', \'2018-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'2\', \'username00\',
     \'SkateBar\', \'wanna go to the bar and skate at the same time?\',
      \'1999-01-01\', \'2018-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'3\', \'username02\',
     \'Solar Panel for LIFE\', \'100% no fuss solar panel\',
      \'1999-01-01\', \'2019-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'4\', \'username02\',
     \'Solar Panel Competitor\', \'the other panel is bad\',
      \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'5\', \'username05\',
     \'New books\', \'some title and author\',
      \'1999-01-01\', \'2019-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'6\', \'username05\',
     \'BBC Competitor\', \'we are BBD!\',
      \'1999-01-01\', \'2018-04-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'7\', \'username06\',
     \'New Clothes for all genders\', \'clothes for all genders~\',
      \'1999-01-06\', \'2018-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'8\', \'username05\',
     \'Another Movie by Famous Actor\', \'another movie\',
      \'1999-01-01\', \'2017-09-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'9\', \'username02\',
     \'Another App\', \'another app for another platform\',
      \'1999-01-01\', \'2018-11-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'10\', \'username05\',
     \'projectTitleFOOBAR\', \'BAR BAR FOO BAR HAVE YOU ANY NULL\',
      \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'11\', \'username12\',
     \'Promises life for all\', \'gatica\',
      \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'12\', \'username05\',
     \'projectTitleFOOBAR2\', \'YES SIR YES SIR NULL BAGS FOO\',
      \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'13\', \'username08\',
     \'Pottery\', \'pots and pans\',
      \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'14\', \'username05\',
     \'New android\', \'android version 20\',
      \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'15\', \'username05\',
     \'Sick RnB\', \'some form of music\',
      \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    +   'INSERT INTO project VALUES(\'16\', \'username12\',
     \'New Iphone\', \'ios version 30\',
      \'1999-01-01\', \'2020-01-01\', 100000, FALSE);'
    ;

```

populateProjCat.js

```
exports.query =  
        'INSERT INTO project_category VALUES(1, \'Art\');'
    +   'INSERT INTO project_category VALUES(1, \'Photography\');'
    +   'INSERT INTO project_category VALUES(2, \'Technology\');'
    +   'INSERT INTO project_category VALUES(3, \'Crafts\');'
    +   'INSERT INTO project_category VALUES(4, \'Technology\');'
    +   'INSERT INTO project_category VALUES(5, \'Publishing\');'
    +   'INSERT INTO project_category VALUES(6, \'Journalism\');'
    +   'INSERT INTO project_category VALUES(7, \'Fashion\');'
    +   'INSERT INTO project_category VALUES(8, \'Technology\');'
    +   'INSERT INTO project_category VALUES(8, \'Games\');'
    +   'INSERT INTO project_category VALUES(8, \'Crafts\');'
    +   'INSERT INTO project_category VALUES(9, \'Journalism\');'
    +   'INSERT INTO project_category VALUES(10, \'Technology\');'
    +   'INSERT INTO project_category VALUES(11, \'Technology\');'
    +   'INSERT INTO project_category VALUES(12, \'Fashion\');'
    +   'INSERT INTO project_category VALUES(13, \'Crafts\');'
    +   'INSERT INTO project_category VALUES(13, \'Journalism\');'
    +   'INSERT INTO project_category VALUES(13, \'Crafts\');'
    +   'INSERT INTO project_category VALUES(14, \'Technology\');'
    +   'INSERT INTO project_category VALUES(15, \'Music\');'
    +   'INSERT INTO project_category VALUES(15, \'Photography\');'
    +   'INSERT INTO project_category VALUES(16, \'Technology\');'
    ;

```

populateInvest.js

```

exports.query =  
        'INSERT INTO investment VALUES(\'1\', \'username02\', \'4\', 3434 , \'2018-01-01\');'
    +   'INSERT INTO investment VALUES(\'2\', \'username05\', \'3\', 100 , \'2017-05-03\');'
    +   'INSERT INTO investment VALUES(\'3\', \'username00\', \'7\', 24 , \'2019-01-01\');'
    +   'INSERT INTO investment VALUES(\'4\', \'username00\', \'2\', 7655 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(\'5\', \'username03\', \'5\', 11 , \'2019-01-01\');'
    +   'INSERT INTO investment VALUES(\'6\', \'username05\', \'8\', 432 , \'2018-04-01\');'
    +   'INSERT INTO investment VALUES(\'7\', \'username00\', \'12\', 256 , \'2018-01-01\');'
    +   'INSERT INTO investment VALUES(\'8\', \'username08\', \'16\', 3333 , \'2017-09-01\');'
    +   'INSERT INTO investment VALUES(\'9\', \'username09\', \'10\', 333 , \'2018-11-01\');'
    +   'INSERT INTO investment VALUES(\'10\', \'username04\', \'2\', 244 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(\'11\', \'username08\', \'1\', 2558 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(\'12\', \'username05\', \'1\', 3456 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(\'13\', \'username12\', \'2\', 786 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(\'14\', \'username10\', \'11\', 999 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(\'15\', \'username11\', \'10\', 453 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(\'16\', \'username02\', \'10\', 23425 , \'2020-01-01\');'
    ;

```