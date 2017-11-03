// const investmentQuery = 
//     'CREATE TABLE investment (' +
//         'id SERIAL PRIMARY KEY,' +
//         'investor VARCHAR(32) REFERENCES users(username) ON DELETE SET NULL,' +
//         'project SERIAL REFERENCES project(pid) ON DELETE SET NULL,' +
//         'amount DECIMAL CHECK(amount > 0),' +
//         'date DATE NOT NULL' +
//     ');';


exports.query =  
        'INSERT INTO investment VALUES(DEFAULT , \'username02\', \'4\', 3434 , \'2018-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username05\', \'3\', 100 , \'2017-05-03\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username00\', \'7\', 24 , \'2019-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username00\', \'2\', 7655 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username03\', \'5\', 11 , \'2019-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username05\', \'8\', 432 , \'2018-04-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username00\', \'12\', 256 , \'2018-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username08\', \'16\', 3333 , \'2017-09-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username09\', \'10\', 333 , \'2018-11-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username04\', \'2\', 244 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username08\', \'1\', 2558 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username05\', \'1\', 3456 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username12\', \'2\', 786 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username10\', \'11\', 999 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username11\', \'10\', 453 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username02\', \'10\', 23425 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username05\', \'1\', 999999 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username03\', \'1\', 9999 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username08\', \'1\', 3456 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username06\', \'1\', 999999 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username01\', \'1\', 3456 , \'2020-01-01\');'
    +   'INSERT INTO investment VALUES(DEFAULT , \'username00\', \'1\', 3456 , \'2020-01-01\');'
    ;
    