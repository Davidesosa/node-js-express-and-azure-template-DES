const express = require("express");
const app = express();

app.use(express.static(__dirname + '/client'))

const port = process.env.PORT || 3000
app.get('/test', function(request, response) {
	response.type('text/plain')
	response.send('Node.js and Express running on port='+port)
})

app.listen(port, function() {
	console.log("Server is running at http://localhost:3000/")
})
const server = http.createServer((request, response)=>{
	response.writeHead(200, {'Content-Type': 'text/html'})
	response.write("<h3>HelloWorld<h3>")
	response.end("<h3>HelloWorld<h3>")


})