var express = require('express');
var router = express.Router();

router.get('/Ramos', function(req, res){

    // res.sendFile('./myFile.html');

    res.send('Hello Travis');
});

module.exports = router;