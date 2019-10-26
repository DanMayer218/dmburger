var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var jq = require("jquery");
  var app = express();
  var PORT = process.env.PORT || 3000;
  // app.get('/', function (req, res) {
  //   res.send('Hello World')
  // })
   
  // app.listen(3000);

    app.use(express.static("public"));

      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());

        app.engine("handlebars", exphbs({ defaultLayout: "main" }));
        app.set("view engine", "handlebars");

          var router = require("./controllers/burgers_controllers.js");
          // ./controllers/burgers_controller.js
          app.use(router);


  app.listen(PORT, function() { 
    console.log("Server listening on: http://localhostL:" + PORT);
});
  