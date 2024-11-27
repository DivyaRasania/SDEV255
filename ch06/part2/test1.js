var fs = require("fs");
var data = fs.readFileSync("file1.txt");
console.log("File content:");
console.log(data);