
In order to access the API's, we need a valid json web token that wis provided via post request to the URL:
https://localhost:8080/login

Once in hand, add it to the http header request using a tool like postman.

File details:

package.json: This file will have all nodejs dependencies module for this project.

model/Profile.js: This file will use to create profile player schema and model.
model/Team.js: This file will use to create team schema and model.

app.js: This file will use to create nodejs application server and routes url.

node_modules folder: This folder will contains all nodejs packages.

The Node js Rest API details are as follows:

Route	          Method	        Type	   Posted JSON                     	      Description
=============================================================================================================================
/profile	       GET	       JSON	                –	                            Get all the profile data
/profile/{id}	   GET	       JSON	               –	                            Get a single profile player data
/profile	      POST	       JSON	    { "firstName": "Jose", "lastName": "None", "age": 45,"team": "Real Madrid", "position": "Neutral"}	Insert new player record into database
/profile	    PUT	     JSON	{ "firstName": "Jose", "lastName": "None", "age": 46,"team": "Real Madrid", "position": "Neutral"}	Update player record into database
/profile	   DELETE	 JSON	{"id" : "5b926de21967921079483288"}	Delete particular player record from database


