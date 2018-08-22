const promise = require('bluebird');


const initOptions = {
    // Use a custom promise library, instead of the default ES6 Promise:
    promiseLib: promise 
};

// Database connection parameters:
const config = {
    host: 'localhost',
    port: 5432,
    database: 'restaurants',
    user: 'postgres'
};

// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);
// Create the database instance:
const db = pgp(config);

module.exports = db;
