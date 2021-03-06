var http = require('http');
var fs = require('fs');
var response = fs.readFile('./index.html',  function (err, html) {
	//Lets define a port we want to listen to
	const PORT=8080; 
    
    if (err) {
        throw err; 
    }       

    function handleRequest (request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }

    var server = http.createServer(handleRequest);

    server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
	});
});

