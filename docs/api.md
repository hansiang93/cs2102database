# APIs

prefix all apis with 'localhost:3000/api'

Finish on the week of GRE

CREATE ISSUEs

MULTIPLE catagorIES


SORTING OF DATABASE
search by username

To do: Sort database by name via trigger

done Set PostGreSQL DATE format

Get Current DATE in Postgres

New Function for random PID and IID

done?? Trigger to check if funded, if not, check if fund is reached 

If ensure investment date < p.enddate

SEARCH BY PROJECT NAME AND FILTERS

LEADERBOARD for investors
Additional Stats? lower priority i guess? MEAN MEDIAN AVG ETC
FUNKY Person with name that starts with P donates more than those
Person born in Jan > Dec


FEATURED PROJECTS for frontpage

Give you a list of users and amount + users and project no.


ADMIN tools

THROW ERROR

## List of various APIs needed

- [x] Get all projects and their information

> GET /projects

- [x] Get projects in this category

> GET /projects/{category}

- [x] Search projects by name

> GET /projects/{name}

- [x] Get individual project

> GET /projects/{pid} 
> GET /projects/funded
> GET /projects/ongoing

> DELETE /project/{pid}

- [x] Create Project

> POST /project/

'''
example data

"pid":"5436"
"username":"username02"
"title":"this is a new crafts game",
"description":"testing",
"category":[String0,string1....],
"enddate":"2018-11-20",
"startdate": CURRENT DATE (will take current date),
"amountrequested":"5000",

'''

- [x] Update Project

> POST /project/{pid}

'''
example data

"pid":"5436"
"username":"username02"
"title":"this is a new crafts game",
"description":"testing",
"category":[String0,string1....],
"enddate":"2018-11-20",
"startdate": CURRENT DATE (will take current date),
"amountrequested":"5000",

'''


- [x] Get all categories

> GET /categories

- [ ] Get projects filtered by name
- [ ] Get projects filtered by categories
- [ ] Get projects filtered by FUNDED OR NOT
- [ ] Get project investors and their values
- [x] Get all Usernames and their information (for Admin)

> GET /alluser

- [ ] Get individual project progress in funding
- [x] Get individual User and their information

> GET /user/{username}

- [ ] Get individual User's Projects
- [ ] Get individual's all projects invested in



- [x] Create investment amount for a project

POST /invest/{project_id}

'''
"invest_id":"1234",
"username":"username10",
"amount":"59483",
"date":"2018-11-20",

'''

- [x] Create a new User

> POST /register

'''
needs req.body.() username, fullname, email, dob, country, role
'''

- [ ] Create new catagory?

- [ ] Delete individual project -> Delete all related investments as well (for Admin)
- [ ] Delete individual investment
- [ ] Delete individual User (for self) (for admin) BUT keep investment?

> DELETE /user/{username}


## Other Useful APIs to support

- [ ] Check if Project ID is occupied?
- [ ] Check if Investment ID is occupied?
- [ ] Check if username is taken
