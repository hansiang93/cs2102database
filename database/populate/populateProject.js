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
        'INSERT INTO project VALUES(\'1\', \'username00\', \'New arts and craft project\', \'test description no.1\', \'Art\' ,\'1999-01-01\', \'2018-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'2\', \'username00\', \'SkateBar\', \'test description no.1\', \'Technology\' ,\'1999-01-01\', \'2018-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'3\', \'username02\', \'Solar Panel for LIFE\', \'test description no.1\', \'Crafts\' ,\'1999-01-01\', \'2019-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'4\', \'username02\', \'Solar Panel Competitor\', \'test description no.1\', \'Technology\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'5\', \'username05\', \'New books\', \'test description no.1\', \'Publishing\' ,\'1999-01-01\', \'2019-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'6\', \'username05\', \'BBC Competitor\', \'test description no.1\', \'Journalism\' ,\'1999-01-01\', \'2018-04-01\', 100000);'
    +   'INSERT INTO project VALUES(\'7\', \'username06\', \'New Clothes for all genders\', \'test description no.1\', \'Fashion\' ,\'1999-01-06\', \'2018-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'8\', \'username05\', \'Another Movie by Famous Actor\', \'test description no.1\', \'Theater\' ,\'1999-01-01\', \'2017-09-01\', 100000);'
    +   'INSERT INTO project VALUES(\'9\', \'username02\', \'Another App\', \'test description no.1\', \'Technology\' ,\'1999-01-01\', \'2018-11-01\', 100000);'
    +   'INSERT INTO project VALUES(\'10\', \'username05\', \'projectTitleFOOBAR\', \'test description no.1\', \'Journalism\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'11\', \'username12\', \'Promises life for all\', \'test description no.1\', \'Technology\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'12\', \'username05\', \'projectTitleFOOBAR\', \'test description no.1\', \'Fashion\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'13\', \'username08\', \'Pottery\', \'test description no.1\', \'Crafts\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'14\', \'username05\', \'New android\', \'test description no.1\', \'Technology\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'15\', \'username05\', \'Sick RnB\', \'test description no.1\', \'Music\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'16\', \'username12\', \'New Iphone\', \'test description no.1\', \'Technology\' ,\'1999-01-01\', \'2020-01-01\', 100000);'
    ;
    