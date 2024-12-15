var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/task_list");
var listSchema = mongoose.Schema({
  text: String,
  task: String,
  dateA: String,
});
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

// creating a new element in the list
app.post("/list", async function (req, res) {
  var dateA = req.body.dateA;
  var text = req.body.text;
  var task = req.body.task;
  console.log(text);
  console.log(task);
  console.log(dateA);
  try {
    var doc = await List.create({ text: text, task: task, dateA: dateA });
    res.json({ id: doc._id });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// retrieving list of elements
app.get("/list", async function (req, res) {
  try {
    var elements = await List.find();
    res.json({ elements: elements });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// modifying an element in the list
app.put("/list", async function (req, res) {
  try {
    var id = req.body.id;
    var task = req.body.task;
    var text = req.body.text;
    var dateA = req.body.dateA;
    await List.updateOne(
      { _id: id },
      { text: text, task: task, dateA: dateA }
    ).exec();
    // don't forget exec()!
    res.send();
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
  // close the connection to the browser
});

// remove an element from the list
app.delete("/list", async function (req, res) {
  var id = req.body.id;
  console.log(req.body.id);
  await List.deleteOne({ _id: id }).exec(); // don't forget exec()!
  res.send(); // close the connection to the browser
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
