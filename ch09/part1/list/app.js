var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test"); // we
// connect
// to
// mydb_test
var listSchema = mongoose.Schema({
  text: String, // text associated with the list item
});
// association of the List model with the elements collection
var List = mongoose.model("elements", listSchema);
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.post("/list", function (req, res) {
  var text = req.body.text;

  List.create({ text: text }).then(function (doc) {
    res.json({ id: doc._id });
  }); // send the MongoDB identifier
  // in the response
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
