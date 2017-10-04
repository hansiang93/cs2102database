# APIs

prefix all apis with 'localhost:3000/api'


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
