// const investmentQuery = 
//     'CREATE TABLE investment (' +
//         'id SERIAL PRIMARY KEY,' +
//         'investor VARCHAR(32) REFERENCES users(username) ON DELETE SET NULL,' +
//         'project SERIAL REFERENCES project(pid) ON DELETE SET NULL,' +
//         'amount DECIMAL CHECK(amount > 0),' +
//         'date DATE NOT NULL' +
//     ');';


exports.query =  
        'INSERT INTO invests VALUES(\'carz\', \'4\', 3434 , \'2016-01-01\');'
    +   'INSERT INTO invests VALUES(\'elis\', \'3\', 100 , \'2017-05-03\');'
    +   'INSERT INTO invests VALUES(\'alexf\', \'7\', 24 , \'2016-01-01\');'
    +   'INSERT INTO invests VALUES(\'alexf\', \'2\', 7655 , \'2017-01-01\');'
    +   'INSERT INTO invests VALUES(\'carz\', \'5\', 11 , \'2017-01-01\');'
    +   'INSERT INTO invests VALUES(\'elis\', \'8\', 432 , \'2016-04-01\');'
    +   'INSERT INTO invests VALUES(\'alexf\', \'12\', 256 , \'2016-01-01\');'
    +   'INSERT INTO invests VALUES(\'henny\', \'16\', 3333 , \'2017-09-01\');'
    +   'INSERT INTO invests VALUES(\'idragon\', \'10\', 333 , \'2017-11-01\');'
    +   'INSERT INTO invests VALUES(\'denmark\', \'2\', 5353 , \'2017-01-01\');'
    +   'INSERT INTO invests VALUES(\'henny\', \'1\', 2558 , \'2016-04-01\');'
    +   'INSERT INTO invests VALUES(\'fedrick\', \'1\', 3456 , \'2016-03-01\');'
    +   'INSERT INTO invests VALUES(\'louis\', \'2\', 3242 , \'2015-05-01\');'
    +   'INSERT INTO invests VALUES(\'kell\', \'11\', 999 , \'2017-05-12\');'
    +   'INSERT INTO invests VALUES(\'louis\', \'10\', 453 , \'2017-05-01\');'
    +   'INSERT INTO invests VALUES(\'carz\', \'10\', 23425 , \'2015-10-01\');'
    +   'INSERT INTO invests VALUES(\'fedrick\', \'12\', 999999 , \'2014-11-01\');'
    +   'INSERT INTO invests VALUES(\'denmark\', \'13\', 9999 , \'2010-09-13\');'
    +   'INSERT INTO invests VALUES(\'idragon\', \'13\', 3456 , \'2010-09-14\');'
    +   'INSERT INTO invests VALUES(\'pika\', \'12\', 999999 , \'2012-05-21\');'
    +   'INSERT INTO invests VALUES(\'benf\', \'16\', 3456 , \'2012-06-22\');'
    +   'INSERT INTO invests VALUES(\'ffff\', \'10\', 3456 , \'2011-05-12\');'
    +   'INSERT INTO invests VALUES(\'jack\', \'5\', 112 , \'2015-07-01\');'
    +   'INSERT INTO invests VALUES(\'denmark\', \'6\', 643 , \'2015-07-01\');'
    +   'INSERT INTO invests VALUES(\'denmark\', \'7\', 453 , \'2017-05-01\');'
    +   'INSERT INTO invests VALUES(\'parv\', \'7\', 75 , \'2017-05-12\');'
    +   'INSERT INTO invests VALUES(\'elis\', \'6\', 222 , \'2016-03-21\');'
    +   'INSERT INTO invests VALUES(\'petec\', \'3\', 12 , \'2012-03-21\');'
    +   'INSERT INTO invests VALUES(\'mandyf\', \'2\', 12 , \'2011-05-21\');'
    +   'INSERT INTO invests VALUES(\'ckck\', \'1\', 12 , \'2012-05-21\');'
    ;
    