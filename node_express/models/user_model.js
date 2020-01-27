const config = require('../bin/config');
var connection = config.connection;
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var userSchema = Schema({
  name: String,
  email: String,
  password: String,
  dob: Date
});

var User = mongoose.model('User', userSchema);

module.exports = User