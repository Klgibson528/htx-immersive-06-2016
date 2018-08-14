var express = require('express');
var router = express.Router();


router.get('/', function(request, response){

    // request.message = "hello";
    console.log("first function");
    response.send('<h1>Hello World</h1>');
    
});

module.exports = router;