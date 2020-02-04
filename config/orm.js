const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  function objToSql(ob) {
    // column1=value, column2=value2,...
    var arr = [];
  
    for (var key in ob) {
      arr.push(key + "=" + ob[key]);
    }
  
    return arr.toString();
  }

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (" ;
        queryString += cols.toString() ;
        queryString += ") " ;
        queryString += "VALUES (" ;
        queryString += printQuestionMarks(vals.length) ;
        queryString += ") ";

        console.log(queryString);
         connection.query(queryString, vals, function(err, result){
             if(err){
                 throw err
             }
             cb(result);
         });
    },
    updateOne: function (table, value, cb) {
        var queryString = "UPDATE " + table + " SET devoured=true WHERE id=" + value + ";";
        connection.query(queryString, function(err,result){
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;