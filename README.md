
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

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

[a variety of tools and APIs](https://www.crossref.org/services/metadata-delivery/)

package.json: This file will have all nodejs dependencies module for this example.

config/mongodb.js: This file will use for databases connection parameters for Mongodb

config/firebase.js: This file will use for databases connection parameters for firebase

model/users.js: This file will use to create user schema and model.

server.js: This file will use to create nodejs application server and routes url.
routes/api/contacts: This file will handle the end points request for contacts.

routes/api/users:This file will handle the end point request for users.

node_modules folder: This folder will contains all nodejs packages.

The Node js RESTful API details are as follows:


| resource      | description                       |
|:--------------|:----------------------------------|
| `/works`      | returns a list of all works (journal articles, conference proceedings, books, components, etc), 20 per page
| `/funders`    | returns a list of all funders in the [Funder Registry](https://github.com/Crossref/open-funder-registry)
| `/members` | returns a list of all Crossref members (mostly publishers) |
| `/types`      | returns a list of valid work types |
| `/licenses`  | return a list of licenses applied to works in Crossref metadata |
| `/journals` | return a list of journals in the Crossref database |






