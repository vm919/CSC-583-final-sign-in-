# CSC-583-final-sign-in-

## Non-Functional Requirements:

This application is a simple user interface that allows the users to register.

To accomplish the above tasks the application reqires the user's to:

* provide their name

* provide their email address

* provide their phone number

* provide the name of the company

* check the box of Official visit (optional)

* check the box of Escort required (optional-if required)

* check the box of Escort name (if previous option is selected)

The applications has been designed by following and utilizing the rules and procedures implemented in the CSC-583 class/semester project.

The application's registration page has responsiveness and also works in the tablet mode.

Two user interfaces are provided by the application viz. user registration and diplay the registered users.

The application allows the administrator to view the list of registered users.

## Installation Instructions:

## Steps for Setting mongodb

## In Terminal 1

sudo mkdir -p /data/db
sudo chown -R `id -un` /data/db
mongod

## In Terminal 2
mongo
use users

## In Terminal 3
npm install --save
npm run dev


## In Terminal 4
node server

* Run front-end: npm run dev

* Start node: node server

* Start Mongo: sudo service mongod start

## Architecture:
For database, mongodb has been used. Nodejs has been used for web server and environment's execution. For API, ExpressJS has been used thus making it easy and quick to crud the data.
The runtime enviroment for running the application is Nodejs.
The application is devceloped in MEVN stack. Vuejs has been used for front-end.
In order to implement the front end, Vuejs has been used, and it communicates with express to get response using endpoints. For storing and retreiving data from database (i.e. mongodb) the server communicates with the database.


## Plan Of Action:
- [x] Analyze the non-functional requirements
- [x] Setup the environment and connectvity
- [x] Registration page
- [x] Admin page



