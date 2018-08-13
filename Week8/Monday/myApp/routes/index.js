let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {

    res.send(`
        <h1>Meetup Speakers</h1>

        <img src="/images/misc/background.jpg" style="height: 400px;" >
    
    `)

})



module.exports = router;