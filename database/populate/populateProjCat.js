    // 'CREATE TABLE project_category ( ' +
    //     'pid INT REFERENCES project(pid), ' +
    //     'name VARCHAR(64) REFERENCES category(name) ' +
    //     ');'
    // Art, Comics, Crafts, Dance, Design, Fashion, Film & Video
    // Food, Games, Journalism, Music, Photography, Publishing, 
    // Technology, Theater


exports.query =  
        'INSERT INTO has VALUES(1, \'Art\');'
    +   'INSERT INTO has VALUES(1, \'Photography\');'
    +   'INSERT INTO has VALUES(2, \'Technology\');'
    +   'INSERT INTO has VALUES(3, \'Crafts\');'
    +   'INSERT INTO has VALUES(4, \'Technology\');'
    +   'INSERT INTO has VALUES(5, \'Publishing\');'
    +   'INSERT INTO has VALUES(6, \'Journalism\');'
    +   'INSERT INTO has VALUES(7, \'Fashion\');'
    +   'INSERT INTO has VALUES(8, \'Technology\');'
    +   'INSERT INTO has VALUES(8, \'Games\');'
    +   'INSERT INTO has VALUES(8, \'Crafts\');'
    +   'INSERT INTO has VALUES(9, \'Journalism\');'
    +   'INSERT INTO has VALUES(10, \'Technology\');'
    +   'INSERT INTO has VALUES(11, \'Technology\');'
    +   'INSERT INTO has VALUES(12, \'Fashion\');'
    +   'INSERT INTO has VALUES(13, \'Crafts\');'
    +   'INSERT INTO has VALUES(13, \'Journalism\');'
    +   'INSERT INTO has VALUES(14, \'Crafts\');'
    +   'INSERT INTO has VALUES(14, \'Technology\');'
    +   'INSERT INTO has VALUES(15, \'Music\');'
    +   'INSERT INTO has VALUES(15, \'Photography\');'
    +   'INSERT INTO has VALUES(16, \'Technology\');'
    ;