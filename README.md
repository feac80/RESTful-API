
package.json: This file will have all nodejs dependencies module for this example.

model/.js: This file will use to create employee schema and model.

app.js: This file will use to create nodejs application server and routes url.

node_modules folder: This folder will contains all nodejs packages.

The Node js Rest API details are as follows:

Route	          Method	  Type	   Posted JSON                     	  Description
=============================================================================================================================
/employees	    GET	      JSON	–	                           Get all employees data
/employees/{id}	GET	      JSON	–	                           Get a single employee data
/employees	    POST	    JSON	{"employee_name": "Adam", "employee_age": "34", "employee_salary" : "23421"}	Insert new employee record into database
/employees	    PUT	     JSON	{"employee_name": "Adam", "employee_age": "34", "employee_salary" : "23421", "id":21}	Update employee record into database
/employees	   DELETE	 JSON	{"id" : 59}	Delete particular employee record from database

name            url               verb        description
====================================================================================
INDEX(camps)  /campgrounds         GET        Show the list of Campground   
NEW           /campgrounds/new     GET        Show the form to create campgrounds    
CREATE        /campgrounds         POST       create a new camp
SHOW          /campgrounds/:id     GET        Show an especific campgroup  

Name	     Path	    HTTP Verb	Purpose	Mongoose Method
Index	     /dogs	    GET	List all dogs	Dog.find()
New	      /dogs/new	    GET	Show new dog form	N/A
Create    /dogs	        POST	Create a new dog, then redirect somewhere	Dog.create()
Show      /dogs/:id	    GET	Show info about one specific dog	Dog.findById()
Edit  	  /dogs/:id/edit GET	Show edit form for one dog	Dog.findById()
Update	  /dogs/:id	     PUT	   Update particular dog, then redirect somewhere	Dog.findByIdAndUpdate()
Destroy	  /dogs/:id	   DELETE	Delete a particular dog, then redirect somewhere	Dog.findByIdAndRemove()
