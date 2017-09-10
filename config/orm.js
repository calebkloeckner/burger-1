
var connection = require("../config/connection.js");

var orm = {
  all: function(tableInput, cb){
    connection.query("SELECT * FROM " +tableInput+";", function(error, result) {
      if(error) throw error;
      cb(result)
    })
  },

  update: function(tableInput, condition, cb) {
    connection.query("UPDATE "+tableInput+" SET devoured=true WHERE id="+condition+";", function(error, result){
      if(error)throw error;
      cb(result);
    })
  }
}

module.exports = orm;
