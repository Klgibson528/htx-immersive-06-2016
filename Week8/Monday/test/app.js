let express = require('express');
let app = express();
let data = require('./data/data.json');


app.use(express.static('/routes/'))



app.listen(3000, ()=> {
    console.log("listening on port 3000");
})