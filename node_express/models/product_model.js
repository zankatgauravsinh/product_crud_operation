const config = require('../bin/config');
var connection = config.connection;
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var productSchema = Schema({
    name: String,
    image: String,
    description: String,
    Expirydate: String
});
  
var Product = mongoose.model('Product', productSchema);

module.exports = Product