var http = require("http");
var fs	= require("fs");
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   var url	= request.url;
   switch(url){
		case '/':
			getStaticFileContent(response,'public/index.html','text/html');
			break;
		case './about':
			getStaticFileContent(response,'public/about.html','text/html');
			break;
		case './contact':
			getStaticFileContent(response,'public/contact.html','text/html');
			break;
		case './dives':
			getStaticFileContent(response,'public/dives.html','text/html');
			break;
		case '/foods':
			getStaticFileContent(response,'public/foods.html','text/html');
			break;
		case '/news':
			getStaticFileContent(response,'public/news.html','text/html');
			break;
		case '/rooms':
			getStaticFileContent(response,'public/rooms.html','text/html');
			break;
		default:
			response.writeHead(404, {'Content-Type':'text/plain'});
			response.end('page not found.');
		
		
   }
   
}).listen(9099);

// Console will print the message
console.log('Server running at http://127.0.0.1:9099/');

function getStaticFileContent(response, filepath, contentType){
	fs.readFile(filepath, function(error, data){
		if(error){
			response.writeHead(500, {'Content-Type':'text/plain'});
			response.end('500 - Internal Server Error.');
		}
		if(data){
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data);
		}
	});
}