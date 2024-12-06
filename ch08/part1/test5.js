var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");
var clientSchema = mongoose.Schema({
  lastname: String,
  firstname: String,
  address: String,
});
// creation of the Client class associated with the clients
// collection
var Client = mongoose.model("clients", clientSchema);
console.log("Before the create() statement");
// save the document in the database (clients collection)
Client.create({
  lastname: "Obama",
  firstname: "Barack",
  address: "Washington",
}).then(function (doc) {
  console.log("The client is inserted into the collection", doc);
});
console.log("After the create() statement");
