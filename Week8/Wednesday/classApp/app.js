var express = require('express');
var app = express();
var reload = require('reload');
var data = require('./data/data.json');

var bodyParser = require('body-parser');

app.set('view engine', 'ejs');


  // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(function(req, res, next){
    console.log("clicked page" + req.originalUrl.toString());
    next();
});

app.get('/', (req, res) => {

    res.render('index',{
        pageTitle: "Digital Crafts",
        pageID: 'Home',
        speakers: data.speakers
    })
});



app.use(require('./routes/hussesin'));
app.use(require('./routes/travis'));
app.use(require('./routes/form'));
// app.use(require('./routes/index'));



// app.get('/form', function (req, res) {
//     var html='';
//     html += "<form action='/thank'  method='post' name='form1'>";
//     html += "Name:</p><input type= 'text' name='name'>";
//     html += "Email:</p><input type='text' name='email'>";
//     html += "address:</p><input type='text' name='address'>";
//     html += "Mobile number:</p><input type='text' name='mobilno'>";
//     html += "<input type='submit' value='submit'>";
//     html += "<INPUT type='reset'  value='reset'>";
//     html += "</form>";
//     res.send(html);
//   });

  app.post('/thank', function (req, res){
    var reply='';

    reply += "Your name is" + req.body.name;
    reply += "Your E-mail id is" + req.body.email; 
    reply += "Your address is" + req.body.address;
    reply += "Your mobile number is" + req.body.mobilno;
    res.send(reply);
   });





let server = app.listen(8000, () =>{
    console.log("running on port 8000")
});

// reload(server, app)


