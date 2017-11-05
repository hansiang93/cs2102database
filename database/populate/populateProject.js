// const projectQuery = 
//     'CREATE TABLE project (' +
//         'pid SERIAL PRIMARY KEY,' +
//         'creator INTEGER REFERENCES users(id) ON DELETE SET NULL,' +
//         'title VARCHAR(256),' +
//         'description VARCHAR(256),' +
//         'category VARCHAR(64) REFERENCES category(name),' +
//         'startdate DATE NOT NULL,' +
//         'enddate DATE NOT NULL,' +
//         'amountrequested BIGSERIAL,' +
//         'funded BOOLEAN' +
//     ');'


exports.query =  
        'INSERT INTO project VALUES(1, \'benf\', \'New arts and craft project\', \'this is a new way of doing arts and crafts\', \'1999-01-01\', \'2018-01-01\', 999999, 0);'
    +   'INSERT INTO project VALUES(2, \'carz\', \'SkateBar\', \'wanna go to the bar and skate at the same time?\', \'1999-01-01\', \'2018-01-01\', 100, 0);'
    +   'INSERT INTO project VALUES(3, \'denmark\', \'Solar Panel for LIFE\', \'100% no fuss solar panel\', \'1999-01-01\', \'2019-01-01\', 710000, 0);'
    +   'INSERT INTO project VALUES(4, \'elis\', \'Solar Panel Competitor\', \'the other panel is bad\', \'1999-01-01\', \'2020-01-01\', 1000, 0);'
    +   'INSERT INTO project VALUES(5, \'fedrick\', \'New books\', \'some title and author\', \'1999-01-01\', \'2019-01-01\', 10030, 0);'
    +   'INSERT INTO project VALUES(6, \'pika\', \'BBC Competitor\', \'we are BBD!\', \'1999-01-01\', \'2018-04-01\', 1004000, 0);'
    +   'INSERT INTO project VALUES(7, \'henny\', \'New Clothes for all genders\', \'clothes for all genders~\', \'1999-01-06\', \'2018-01-01\', 10999, 0);'
    +   'INSERT INTO project VALUES(8, \'idragon\', \'Another Movie by Famous Actor\', \'another movie\', \'1999-01-01\', \'2017-09-01\', 107830, 0);'
    +   'INSERT INTO project VALUES(9, \'jack\', \'Another App\', \'another app for another platform\', \'1999-01-01\', \'2018-11-01\', 130, 0);'
    +   'INSERT INTO project VALUES(10, \'kell\', \'projectTitleFOOBAR\', \'BAR BAR FOO BAR HAVE YOU ANY NULL\', \'1999-01-01\', \'2020-01-01\', 1320, 0);'
    +   'INSERT INTO project VALUES(11, \'louis\', \'Promises life for all\', \'gatica\', \'1999-01-01\', \'2020-01-01\', 1330, 0);'
    +   'INSERT INTO project VALUES(12, \'mandyf\', \'projectTitleFOOBAR2\', \'YES SIR YES SIR NULL BAGS FOO\', \'1999-01-01\', \'2020-01-01\', 1050, 0);'
    +   'INSERT INTO project VALUES(13, \'ckck\', \'Pottery\', \'pots and pans\', \'1999-01-01\', \'2020-01-01\', 130, 0);'
    +   'INSERT INTO project VALUES(14, \'kimjk\', \'New android\', \'android version 20\', \'1999-01-01\', \'2020-01-01\', 150000, 0);'
    +   'INSERT INTO project VALUES(15, \'dante\', \'Sick RnB\', \'some form of music\', \'1999-01-01\', \'2020-01-01\', 160000, 0);'
    +   'INSERT INTO project VALUES(16, \'benk\', \'New Iphone\', \'ios version 30\', \'1999-01-01\', \'2020-01-01\', 10800000, 0);'
    ;
    