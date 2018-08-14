let express = require('express');
let router = express.Router();


router.get('/', (req, res) => {

    var data = req.app.get('appData');

    var pagePhotos = [];

    data.speakers.forEach(function(items){
        pagePhotos = pagePhotos.concat(items.artwork);

    })
    
    res.render('index', {
        pageTitle: 'Home',
        artwork: pagePhotos,
        speakers: data.speakers,
        pageID: 'home'

    })

})



module.exports = router;