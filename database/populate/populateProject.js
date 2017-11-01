    // 'CREATE TABLE project (' +
    //     'pid INT PRIMARY KEY,' +
    //     'creator VARCHAR(32) REFERENCES users(username),' +
    //     'title VARCHAR(256),' +
    //     'description VARCHAR(256),' +
    //     'category VARCHAR(64) REFERENCES category(name),' +
    //     'startdate DATE NOT NULL,' +
    //     'enddate DATE NOT NULL,' +
    //     'amountrequested BIGSERIAL,' +
    //     'funded BOOLEAN' +
    // ');'


exports.query =  
        'INSERT INTO project VALUES(\'1\', \'username00\', \'New arts and craft project\', \'this is a new way of doing arts and crafts\', \'1999-01-01\', \'2018-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'2\', \'username00\', \'SkateBar\', \'wanna go to the bar and skate at the same time?\', \'1999-01-01\', \'2018-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'3\', \'username02\', \'Solar Panel for LIFE\', \'100% no fuss solar panel\', \'1999-01-01\', \'2019-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'4\', \'username02\', \'Solar Panel Competitor\', \'the other panel is bad\', \'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'5\', \'username05\', \'New books\', \'some title and author\', \'1999-01-01\', \'2019-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'6\', \'username05\', \'BBC Competitor\', \'we are BBD!\', \'1999-01-01\', \'2018-04-01\', 100000);'
    +   'INSERT INTO project VALUES(\'7\', \'username06\', \'New Clothes for all genders\', \'clothes for all genders~\', \'1999-01-06\', \'2018-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'8\', \'username05\', \'Another Movie by Famous Actor\', \'another movie\', \'1999-01-01\', \'2017-09-01\', 100000);'
    +   'INSERT INTO project VALUES(\'9\', \'username02\', \'Another App\', \'another app for another platform\', \'1999-01-01\', \'2018-11-01\', 100000);'
    +   'INSERT INTO project VALUES(\'10\', \'username05\', \'projectTitleFOOBAR\', \'BAR BAR FOO BAR HAVE YOU ANY NULL\', \'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'11\', \'username12\', \'Promises life for all\', \'gatica\', \'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'12\', \'username05\', \'projectTitleFOOBAR2\', \'YES SIR YES SIR NULL BAGS FOO\', \'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'13\', \'username08\', \'Pottery\', \'pots and pans\', \'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'14\', \'username05\', \'New android\', \'android version 20\', \'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'15\', \'username05\', \'Sick RnB\', \'some form of music\', \'1999-01-01\', \'2020-01-01\', 100000);'
    +   'INSERT INTO project VALUES(\'16\', \'username12\', \'New Iphone\', \'ios version 30\', \'1999-01-01\', \'2020-01-01\', 100000);'
    ;
    