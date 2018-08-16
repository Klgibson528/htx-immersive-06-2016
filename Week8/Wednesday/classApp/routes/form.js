var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

  // parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
 
  // parse application/json
 router.use(bodyParser.json())


router.get('/form', (req, res) =>{

    res.render('form');

})

router.post('/submit', (req, res) =>{

    res.send(`The header information: ${req.body.name} ${req.body.email} ${req.body.phone}`);

})

module.exports = router;