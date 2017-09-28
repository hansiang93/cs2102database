# Alpha App for CS2102

Project for CS2102, NUS School of Computing

## Mega Boilerplate App (Node.js)

Generated by http://megaboilerplate.com

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. This app is for demostration purposes and not for deployment

### Database Schema

[Database and SQL commands for this project](docs/databaseSchema.md)

### Prerequisites

This app uses NodeJS. Install NodeJS via your terminal with 

```
sudo apt-get install nodejs
sudo apt-get install npm
```
or on

```
https://nodejs.org/en/download/
```

### Setup

initialise your setup by running

```
$ npm install
```

### Initial run

```
$ DEBUG=cs2102database:* npm start

or

$ npm start

or

$ node server.js

```

and

view the app on a browser at 

```
http://localhost:3000/
```

The postgresql setup was based off of the following tutorial: 

```
http://mherman.org/blog/2015/02/12/postgresql-and-nodejs/
```

### Start pgsl server
Create/start pgsl server at:

```
postgres://localhost:5432/cs2102
```

Enter the development database name, password and user in a '.env' file in root in the following format:

```
SESSION_SECRET='a5855bab6c2aa2c41b942ef96a061bb83fa607812ed328b7f3542a383d794b5d'

DB_HOST=localhost
DB_USER=root
DB_PASS=<<PASSWORD>>
DB_DATABASE=<<NAME>>
```

This would allow for the independence of a SQL server running on the application desktop

Knex usage is optional. Read up on Knex here:

```
http://knexjs.org/
```

### TODO
- Setup Schema using PostgreSQL
- Setup node scripts within package.json
- Implement methods for SQL injection
- Setup front end

## Built With
### Configuration
- **Platform:** node
- **Framework**: express
- **Template Engine**: jade
- **CSS Framework**: bootstrap
- **CSS Preprocessor**: css
- **JavaScript Framework**: Angular
- **Build Tool**: none
- **Unit Testing**: none
- **Database**: postgresql
- **Authentication**: 
- **Deployment**: none

## Group Members

* **Phua Han Siang** - *Initial work* - [github](https://github.com/hansiang93)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.


### License
The MIT License (MIT)

Copyright (c) 2016 Sahat Yalkabov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



## Acknowledgments