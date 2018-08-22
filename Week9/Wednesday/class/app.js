let express = require('express');
let app = express();


// Bluebird is the best promise library available today,
// and is the one recommended here:
const promise = require('bluebird');


// pg-promise initialization options:
const initOptions = {

    // Use a custom promise library, instead of the default ES6 Promise:
    promiseLib: promise, 
};

// Database connection parameters:
const config = {
    host: 'localhost',
    port: 5432,
    database: 'veronica2',
    user: 'postgres'
};

// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);


// Create the database instance:
const db = pgp(config);

db.query('SELECT * FROM student')
  .then(function (results) {
    results.forEach(function (r) {
      console.log(r.id, r.name);
    });
  });

  app.listen(3000);