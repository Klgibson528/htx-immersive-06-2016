var express = require('express');
var app = express();
var reload = require('reload');


app.use(express.static('public'));

app.use(require('./routes/hussesin'));
app.use(require('./routes/travis'));
// app.use(require('./routes/index'));

app.get('/', (req, res) => {

    // res.sendFile('myFile.html' , { root : __dirname});

    res.send(`<h1> Hello World</h1>

    <script src="reload/reload.js"></script>
    `)
})

// app.get('/Travis', function(req, res){

//     res.sendFile('./myFile.html');

//     // response.send('Hello Travis');
// })

// app.get('*', function(request, response){

//     response.send('Hello Matt');
// })




app.use('/books', function(request, response){
    

    response.send(`<h1>BookID page </h1>
    
    `);
})

app.get('/books/:bookID', function(request, response){
    var bookId = request.params.bookID

    response.send(`<h1>BookID ${bookId}</h1>`);
})
app.get('/flights/', (req, res) =>{
    res.send(`Departing:`);
  });

app.get('/flights/:from-:to', (req, res) =>{
    res.send(`Departing: ${req.params.from}, Arriving:  ${req.params.to}`);
  });

  app.get('/query', (req, res) =>{
    res.send(`my url ${req.query.name}`);
  });


let server = app.listen(8000, () =>{
    console.log("running on port 8000")
});

reload(server, app)


