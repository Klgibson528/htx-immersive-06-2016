var express = require('express');
var router = express.Router();

router.get('feedback', function(req, res){
    
    res.send('/feedback', {
        pageTitle: "Feedback",
        pageID: 'feedback'
    })
})

module.exports = router;