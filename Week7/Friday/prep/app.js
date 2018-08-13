// var http = require('http');

// var myServer = http.createServer(function(request, response){
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     //to send back something to client
//     response.write('Digital Crafts');
//     response.end();
// });
// //asking server to  to listen on  a specific port
// myServer.listen(3000);


var http = require('http');

var dt = new Date();

var myServer = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.toDateString());
    res.end();
}).listen(8080);

