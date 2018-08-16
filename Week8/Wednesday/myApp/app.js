let express = require('express');
let app = express();
let data = require('./data/data.json');


app.set('view engine', 'ejs');
app.set('appData', data);


app.locals.siteTitle = "Roux Meetups";



app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));

app.listen(3000, ()=>{
    console.log("listening on port 3000");

})