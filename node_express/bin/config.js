var mongoose = require('mongoose');

var connection = mongoose.connect("mongodb://localhost:27017/aglowid_db", function (err, db) {
    if(err) throw err;
    console.log('connection succes');
});

module.exports = connection;