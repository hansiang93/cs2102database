// const projectQuery = 
//     'CREATE TABLE project (' +
//         'pid SERIAL PRIMARY KEY,' +
//         'creator VARCHAR(32) REFERENCES users(username),' +
//         'title VARCHAR(256),' +
//         'description VARCHAR(256),' +
//         'catagory VARCHAR(64) REFERENCES catagory(name),' +
//         'startdate DATE NOT NULL,' +
//         'enddate DATE NOT NULL,' +
//         'amountrequested BIGSERIAL' +
//     ');'


exports.query =  
        'INSERT INTO project VALUES(\'1\', \'username00\', \'projectTitleFOOBAR\', \'test description no.1\', \'Art\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'2\', \'username00\', \'projectTitleFOOBAR\', \'test description no.1\', \'Technology\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'3\', \'username02\', \'projectTitleFOOBAR\', \'test description no.1\', \'Crafts\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'4\', \'username02\', \'projectTitleFOOBAR\', \'test description no.1\', \'Technology\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'5\', \'username05\', \'projectTitleFOOBAR\', \'test description no.1\', \'Publishing\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'6\', \'username05\', \'projectTitleFOOBAR\', \'test description no.1\', \'Journalism\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'7\', \'username06\', \'projectTitleFOOBAR\', \'test description no.1\', \'Fashion\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'8\', \'username05\', \'projectTitleFOOBAR\', \'test description no.1\', \'Theater\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'9\', \'username02\', \'projectTitleFOOBAR\', \'test description no.1\', \'Technology\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'10\', \'username05\', \'projectTitleFOOBAR\', \'test description no.1\', \'Journalism\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'11\', \'username12\', \'projectTitleFOOBAR\', \'test description no.1\', \'Technology\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'12\', \'username05\', \'projectTitleFOOBAR\', \'test description no.1\', \'Fashion\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'13\', \'username08\', \'projectTitleFOOBAR\', \'test description no.1\', \'Crafts\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'14\', \'username05\', \'projectTitleFOOBAR\', \'test description no.1\', \'Technology\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'15\', \'username05\', \'projectTitleFOOBAR\', \'test description no.1\', \'Music\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'16\', \'username12\', \'projectTitleFOOBAR\', \'test description no.1\', \'Technology\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    ;
    