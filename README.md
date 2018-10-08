<!-- TOC depthFrom:1 depthTo:2 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Crossref REST API](#crossref-rest-api)
	- [Preamble](#preamble)
	- [Meta](#meta)
	- [API overview](#api-overview)


<!-- /TOC -->




## API overview

  - [POST /api/v1/users/register](#post-/api/v1/users/register)
  - [POST /api/v1/users/login](#post-/api/v1/users/login)
  - [POST /api/v1/contacts](#post-/api/v1/contacts)

## POST /api/v1/users/register

 **Description: This endpoind is handling the user registration.**
  
  **URL **
https://addressbook-frank.herokuapp.com/api/v1/users/register
 
 **Data Params:**
 when a post request is made the body payload should look like: 
```
   {
    "name":"Maria Dolores",
    "email":"maria3@hotmail.com",
    "password":"1234567Tt@"
     }
```     

## **Rules:**

| Field | Description |
| --- | --- |
| name | It should be Optional with no more than 40 characters length.
| email |It should have a valid email string with no more than two domain parts e.g. example.com |
| password | Is required, It expects at least 1 special character !#$@%&? and 1 letter and 1 digit and the length should be between 6-15 characters. The sequence of the characters is not important. Matches: 1234567Tt@. Non-Matches Tt122  | 


* **Success Response:**

  **Code:** 201 <br />
    **Content:** `{
    "message": "Success: Created User",
    "name": "Maria Dolores",
    "email": "maria4@hotmail.com",
    "createdDate": "2018-10-08T13:13:33.757Z"
}`
 
  **Error Response:**

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{
    "message": "Something went wrong",
    "error": "ValidationError",
    "errormessage": "\"email\" must be a valid email"
}`

* **Sample Call:**

### POST /api/v1/users/login

 **Description: This endpoind is handling the user login.
 
*  **URL **
https://addressbook-frank.herokuapp.com/api/v1/users/login
 
* **Data Params**
 When making a post request the body payload should look like:  
```
  {
     
    "email":"maria3@hotmail.com",
    "password":"1234567Tt@"
      
  }
```     

## ** Rules: **

| Field | Description |
| --- | --- |
| email | |Is required |
| password |Is required | 


* **Success Response:**

  **Code:** 200 <br />
    **Content:** `{
    "message": "Success: Authenticaded User",
    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYmIwOWNhN2FhMjc1MDAxNTVjMWMxYSIsIm5hbWUiOiJNYXJpYSBEb2xvcmVzIiwiZW1haWwiOiJtYXJpYTNAaG90bWFpbC5jb20iLCJpYXQiOjE1MzkwMDU4NTQsImV4cCI6MTUzOTAwOTQ1NH0.8EL4BxFum0B2RKz36UFvCB-PnJXlgDLDcxAnhRlETok"
}`
 
  **Error Response:**
  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** {
    "message": "Something went wrong ",
    "errormessage": "Auth Failed"
}
  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ "message": "Something went wrong", "error": "ValidationError", "errormessage": "\"email\" must be a valid email"}`


* **Sample Call:**

### POST /api/v1/contacts
* **Description: This endpoint will handle the creation of a new contact.
 
*  **URL **
https://addressbook-frank.herokuapp.com/api/v1/users/register
 
* **Data Params**
 when making a post request the body payload request should look like showed below 
```
      {
      "name":"Eduardo",
      "surname":"De la Cruz",
      "phone":"654654",
      "address":"Tenerife Calle 5 ",
      "email": "feac45@hotmail.com"
    
    }
	
```     

# **Rules:**

| Field | Is required | Description |
| --- | --- | --- |
| name | yes | It should contain an string with max 30 characters length |
| surname | yes| It should be an string with max 30 characters length |
| phone | yes  | It should be a number with max 30 characters length |
| address |yes  | It should be an string with max 30 characters lengt|
| email  | yes  | It should be a valid email format | 


* **Success Response:**

  **Code:** 201 <br />
    **Content:** 
 
  **Error Response:**

  * **Code:** 500 UNPROCESSABLE ENTRY <br />
    **Content:** `{
    "message": "Something went wrong",
    "errormessage": "jwt expired"
}`

* **Sample Call:**

    
------------------------------------------------------------
# Crossref REST API




# Project Title

Address Book application

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 


### Prerequisites

What things you need to install the software and how to install them

```
run npm install
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




--------------------------------------------------------





