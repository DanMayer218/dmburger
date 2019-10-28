// Dependencies for the connection js file
var mysql = require("mysql");

// Server info  
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'M@dm@x19',
  database : 'burger_db'
});

// actually connecting to the server to throw an error or to return the server port info
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });

  module.exports = connection;
