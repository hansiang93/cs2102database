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
CREATE TABLE catagory (
	catagory VARCHAR(64) PRIMARY KEY,
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
CREATE VIEW funding AS
	SELECT *
	FROM invest
	WHERE
	;
```

## Populating of database

Use the following commands to populate the table with test values

```
Give the example
```

And

```
until finished
```
