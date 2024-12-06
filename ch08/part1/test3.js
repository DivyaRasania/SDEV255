var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");
mongoose.connection.on("error", function() {
 console.log("mydb_test database connection error")
});
mongoose.connection.on("open", function() {
 console.log("Successful connection to mydb_test database");
});
console.log("Connecting to mydb_test database in progress...");