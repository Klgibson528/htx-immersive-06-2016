var express      = require('express');
var cookieParser = require('cookie-parser');
const session = require('express-session');
var app = express();
let db = require('./models');


var myStore = new SequelizeStore({
    db: db
})


app.use(cookieParser());

app.use(session({
  secret: 'keyboard cat',
  store: myStore,
  resave: false, 
  proxy: true 
}));

// app.use(cookieParser());

// app.use(session(
//     { secret: 'this-is-a-secret-token', 
//     cookie: { maxAge: 14*24*60*60*1000 }}));

// app.get('/', function(req, res){
//     req.session.someAtrribute = "hello World";

//     res.send('Returning some data');
    
// });

// app.get('/test', function(req, res){
//     res.send(req.session.someAtrribute);

// });

app.listen(3000);
