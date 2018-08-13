var express = require('express');
var router = express.Router();

router.get('/hussein', function(request, response){
    var name = request.param("name");
    var lastName = request.param("lastName");
    // response.send('Hello ' + name + " " + lastName);

    response.send(`<h1>Hello ${name} ${lastName}</h1>`);
})

module.exports = router;