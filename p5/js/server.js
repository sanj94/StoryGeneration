/*
var rita = require('rita');
var rs = RiString("The elephant took a bite");
console.log(rs.features());
*/



// HTTP module
var http = require('http');

//FILE SYSTEM MODULE
var fs = require('fs');
var fileName = '../data/FairyTales.txt';
var stories = "";
stories = fs.readFile("FairyTales.txt", "utf8", function (error, data) {
    return data;
});
console.log(stories);
/*
var handleRequest = function (request, response) {
	fs.readFile(fileName, "utf8", function (error, data) {
    stories = data;
	console.log(stories);
});
/*	
  response.writeHead(200, {'Content-Type': 'text/plain'});
  //var data = "here is some data";
  response.write("Here is some data");
  response.end();
  };
  */
  


/*
// Create a server with the handleRequest callback
var server = http.createServer(handleRequest);
// Listen on port 8080
server.listen(8080);

console.log('Server started on port 8080');
*/
