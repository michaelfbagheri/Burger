var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
// var routes = require("./controllers/catsController.js");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require('./controllers/burgers_controller.js');
app.use(routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });