var express = require('express');
var app = express();
const promise = require('bluebird');


const initOptions = {
    // Use a custom promise library, instead of the default ES6 Promise:
    promiseLib: promise 
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


db.query('SELECT * FROM student2')
.then(function(results){
    results.forEach(function(r){
        console.log(r.id, r.name,);
    });
});

//question: what is you join tables.  How do you access variables
//names that are not unique

// db.one('SELECT * FROM student2 WHERE id=5')
// .then(function(r){

//     console.log(`my name is ${r.name}`);
// });

// db.result("INSERT INTO student2 \
//   VALUES (default, 'Narf')")
//   .then(function (result) {
//     console.log(result.fields);
//   });
var server = app.listen(3000);

server.on('close', function(){
    pgp.end();
})