// Dependency
var mysql = require("mysql");

// Connect to MySQL
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "safechat"
  });
};

connection.connect((function(err){
  if(err) {throw err;}
  console.log("Connected to database.");
}));

// Export
module.exports = connection;

