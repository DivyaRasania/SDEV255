var fs = require("fs");
var data = fs.readFileSync("file1.txt", { encoding : "utf-8" });
console.log("File content:");
console.log(data);