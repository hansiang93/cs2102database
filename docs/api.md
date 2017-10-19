# APIs

prefix all apis with 'localhost:3000/api'



## List of various APIs needed

- [x] Get all categories

> GET /categories

- [x] Get all projects and their information

> GET /allprojects

- [x] Get individual project

> GET /projects/{pid} 

- [ ] Get projects filtered by name
- [ ] Get projects filtered by categories
- [ ] Get projects filtered by progress
- [ ] Get project investors and their values
- [x] Get all Usernames and their information (for Admin)

> GET /alluser

- [ ] Get individual project progress in funding
- [x] Get individual User and their information

> GET /user/{username}

- [ ] Get individual User's Projects
- [ ] Get individual's all projects invested in

- [x] Create Project for indiviudual user

POST /projects/{pid}/update

'''
example data

"title":"this is a new crafts game",
"description":"testing",
"category":"Crafts",
"enddate":"2018-11-20",
"startdate": "2016-09-23",
"amountrequested":"5000",
"creator":"username02"

'''

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

