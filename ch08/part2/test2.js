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
Client.find({ $or: [{ lastname: "Clinton" }, { firstname: "Barack" }] })
  .where("lastname")
  .eq("Clinton")
  .exec()
  .then(function (clients) {
    console.log(clients); // display the clients
  })
  .catch(function (err) {
    console.log(err); // display the error
  });
