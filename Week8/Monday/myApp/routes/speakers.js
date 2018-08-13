let express = require('express');
let router = express.Router();


router.get('/speakers', (req, res) => {

    let dataFile = req.app.get("appData");
    let myHTML;


    dataFile.speakers.forEach(function(item){
        myHTML += `
        <li>
            <h2>${item.name}</h2>
            <img src="/images/speakers/${item.shortname}_tn.jpg" alt="">
            <p>${item.summary}</p>
        </li>
        `;

    })
    

    res.send(`
    <h1>Speakers</h1>
    <ul>
        ${myHTML}
    </ul>
    `)

})


router.get('/speakers/:speakerID', (req, res) => {

    let dataFile = req.app.get("appData");
    let myHTML;

    let speaker = dataFile.speakers[req.params.speakerID];

    res.send(`
    
        <h2>${speaker.name}</h2>
        <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="">
        <p>${speaker.summary}</p>
    `)

    

})

module.exports = router;