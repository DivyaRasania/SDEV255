var http = require("http");
var server = http.createServer(function(req, res) {
  // display the received request in the console
  console.log("Request received:", req.url);
  // indicate that the response is HTML in utf-8
  res.setHeader("Content-type", "text/html; charset=utf-8");
  // we always send the same response, regardless of the 
  // request received
  res.write("<h1>")
  res.write("Good morning all");
  res.write("</h1>");
  res.end();
});
// make the server listen on port 3000 (for example)
server.listen(3000);
console.log("\nThe server was started on port 3000\n");
console.log("You can make a request on:");
console.log("http://localhost:3000");