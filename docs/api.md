# APIs

prefix all apis with 'localhost:3000/api'



## List of various APIs needed

- [x] Get all categories
- [ ] Get all projects and their information
- [ ] Get projects filtered by name
- [ ] Get projects filtered by categories
- [ ] Get projects filtered by progress
- [ ] Get project investors and their values
- [ ] Get all Usernames and their information (for Admin)
- [ ] Get individual project progress in funding
- [ ] Get individual User and their information
- [ ] Get individual User's Projects
- [ ] Get individual's all projects invested in

- [ ] Create Project for indiviudual user
- [ ] Create investment amound for a project
- [ ] Create Users
- [ ] Create new catagory?

- [ ] Delete individual project -> Delete all related investments as well (for Admin)
- [ ] Delete individual investment
- [ ] Delete individual User (for self) (for admin) BUT keep investment?


## Implemented

GET /categories

returns all categories

GET /projects/{pid} 
GET/DELETE /user/{username}

GET /allprojects
GET /alluser

POST /register
'''
needs req.body.() username, fullname, email, dob, country, role
'''

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
