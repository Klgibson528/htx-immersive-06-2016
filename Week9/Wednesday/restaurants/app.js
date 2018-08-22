var express = require('express');
var app = express();
var db = require('./db/database.js');

app.set('view engine', 'ejs');
//public folder
app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('restaurants');
});

app.use(require('./routes/dishes'));

app.get('/newdish', function(req, res){
    res.render('newdish');
})



var server = app.listen(3000);

server.on('close', function(){
    db.end();
})