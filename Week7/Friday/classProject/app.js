let express = require("express");
let app = express();


app.get('/', function(request, response){
    response.send(`<h1>this is my front page</h1>`)
})

app.get('/about', function(request, response){
    response.send(`
    <h1>Lorem ipsum dolor sit</h1>, amet consectetur adipisicing elit. 
    Nostrum minus accusamus laboriosam consequatur odio 
    necessitatibus architecto suscipit veritatis magni quia 
    eligendi doloremque ab quibusdam rem, rerum numquam ipsa 
    excepturi fugit!
    
    `)
})

app.get('/faq', function(request, response){
    var name = request.params.age;
    console.log(name);

    response.send(`frequent questions ${name}`)
})

app.get('/post/:slug', function (request, response) {
    var slug = request.params.slug;
    response.send('Post About: ' + slug);
  });

//creating a server
app.listen(3333, function(){
    console.log("listening on port 3333");
})