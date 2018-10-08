<!-- TOC depthFrom:1 depthTo:2 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Project Title](#project-title)
	- [Getting started](#getting-started)
	- [Prerequisites](#prerequesites)
	- [API overview](#api-overview)
	- [Running Test](#running-the-tests)




<!-- /TOC -->

# Project Title

Address Book Application

## Getting Started

	1.- Clone App from repository 
	2.- 


### Prerequisites

Since we are using two DB enviroments in firebase, it is required to generate two service accounts and download them into the root directory.

enviroment variables

```
run npm install
```

## Files Structure
![file-structure](https://user-images.githubusercontent.com/28504085/46636347-010d2780-cb58-11e8-8fef-d9ccd525b435.jpg)

package.json: This file will have all nodejs dependencies module for this example.

config/mongodb.js: This file will use for databases connection parameters for Mongodb

config/firebase.js: This file will use for databases connection parameters for firebase

model/users.js: This file will use to create user schema and model.

server.js: This file will use to create nodejs application server and routes url.

routes/api/contacts: This file will handle the end points request for contacts.

routes/api/users:This file will handle the request to the endpoint request for users.

node_modules folder: This folder will contains all nodejs packages.


## Running the tests

1.- Run from the terminal the npm command:
```
npm run test
```
and you will be notified as follow
```
> adressbook@1.0.0 test C:\Users\Home\Desktop\Test-project
> SET NODE_ENV=test && node server.js

The server is up and running in port:3000
Connected to test  database
```
2.- Open a new terminal and execute the command
```
npm run test-mocha
```

Expected result:

![checking](https://user-images.githubusercontent.com/28504085/46636223-9360fb80-cb57-11e8-89e5-694c62b27f91.jpg)




## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## API overview

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
| name | It should be Optional with no more than 40 characters length.|
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
![register](https://user-images.githubusercontent.com/28504085/46623182-19b41800-cb2d-11e8-999f-f1a27c2c895e.jpg)

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
| email | Is required |
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

![login](https://user-images.githubusercontent.com/28504085/46623181-191b8180-cb2d-11e8-8dfb-acdd208b2644.jpg)


### POST /api/v1/contacts
* **Description: This endpoint will handle the creation of a new contacts.
 
*  **URL **
https://addressbook-frank.herokuapp.com/api/v1/users/contacts
 
* **Data Params**
 when making a post request the body payload request should look like: 
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

![contact](https://user-images.githubusercontent.com/28504085/46623180-191b8180-cb2d-11e8-8cc9-05a8a550dcd5.jpg)
    









