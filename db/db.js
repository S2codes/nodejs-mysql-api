var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeeManagement"
})

connection.connect(function (err) {
    if (err) {
        console.log("db is not connect..");
        throw err
    }
    
    console.log("DB is connected");
}) 

module.exports = connection