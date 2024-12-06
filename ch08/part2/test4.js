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
Client.deleteOne({ lastname: "Clinton" }).then(function (err, response) {
  console.log("After Clinton's removal");
  console.log("response = ", response);
  Client.find().then(function (doc) {
    console.log("clients = ", doc);
  });
});
