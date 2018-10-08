
## API Resources

  - [POST-/api/v1/users/register](#post-/api/v1/users/register)
  - [POST /api/v1/users/login] (#post-/api/v1/users/login)
  - [POST /api/v1/contacts] (#post-/api/v1/contacts)

### POST /api/v1/users/register

* **URL**

  <_/api/v1/users/register_>

* **Method:**
  
  <_| `POST` |_>

  
*  **URL **
https://addressbook-frank.herokuapp.com/api/v1/users/register
 
* **Data Params**
     {
    "name":"Maria Dolores",
    "email":"maria3@hotmail.com",
    "password":"1234567Tt@"
     }
  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._> 


### POST /api/v1/users/login

### POST /api/v1/contacts



### GET /magazinesid

Route	          Method	        Type	   Posted JSON                     	      Description
=============================================================================================================================
/profile	       GET	       JSON	                –	                            Get all the profile data
/profile/{id}	   GET	       JSON	               –	                            Get a single profile player data
/profile	      POST	       JSON	    { "firstName": "Jose", "lastName": "None", "age": 45,"team": "Real Madrid", "position": "Neutral"}	Insert new player record into database
/profile	    PUT	     JSON	{ "firstName": "Jose", "lastName": "None", "age": 46,"team": "Real Madrid", "position": "Neutral"}	Update player record into database
/profile	   DELETE	 JSON	{"id" : "5b926de21967921079483288"}	Delete particular player record from database


Response body:

    {
        "metadata": {
            "resultset": {
                "count": 123,
                "offset": 0,
                "limit": 10
            }
        },
        "results": [
            {
                "id": "1234",
                "type": "magazine",
                "title": "Public Water Systems",
                "tags": [
                    {"id": "125", "name": "Environment"},
                    {"id": "834", "name": "Water Quality"}
                ],
                "created": "1231621302"
            },
            {
                "id": 2351,
                "type": "magazine",
                "title": "Public Schools",
                "tags": [
                    {"id": "125", "name": "Elementary"},
                    {"id": "834", "name": "Charter Schools"}
                ],
                "created": "126251302"
            }
            {
                "id": 2351,
                "type": "magazine",
                "title": "Public Schools",
                "tags": [
                    {"id": "125", "name": "Pre-school"},
                ],
                "created": "126251302"
            }
        ]
    }
    
    
------------------------------------------------------------
# Crossref REST API

<!-- TOC depthFrom:1 depthTo:2 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Crossref REST API](#crossref-rest-api)
	- [Preamble](#preamble)
	- [Meta](#meta)
	- [API overview](#api-overview)
	- [Result types](#result-types)
	- [Resource components](#resource-components)
	- [Parameters](#parameters)
	- [Queries](#queries)
	- [Field Queries](#field-queries)
	- [Sorting](#sorting)
	- [Facet counts](#facet-counts)
	- [Filter names](#filter-names)
	- [Result controls](#result-controls)
	- [API versioning](#api-versioning)
	- [Documentation history](#documentation-history)

<!-- /TOC -->


# Project Title

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



package.json: This file will have all nodejs dependencies module for this example.

config/mongodb.js: This file will use for databases connection parameters for Mongodb

config/firebase.js: This file will use for databases connection parameters for firebase

model/users.js: This file will use to create user schema and model.

server.js: This file will use to create nodejs application server and routes url.
routes/api/contacts: This file will handle the end points request for contacts.

routes/api/users:This file will handle the end point request for users.

node_modules folder: This folder will contains all nodejs packages.

The Node js RESTful API details are as follows:




| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |


--------------------------------------------------------

**Title**
----
  <_Additional information about your API call. Try to use verbs that match both request type (fetching vs modifying) and plurality (one vs multiple)._>

* **URL**

  <_The URL Structure (path only, no root url)_>

* **Method:**
  
  <_The request type_>

  `GET` | `POST` | `DELETE` | `PUT`
  
*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 

   **Required:**
 
   `id=[integer]`

   **Optional:**
 
   `photo_id=[alphanumeric]`

* **Data Params**

  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._> 

* **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._> 



