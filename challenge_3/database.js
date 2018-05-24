var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // all following code in here
  var customerSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    add1: String,
    add2: String,
    city: String,
    state: String,
    zip: Number,
    phone: Number,
    cardNumber: Number,
    expiry: String,
    cvv: Number,
    billingZipCode: Number
  });

  var Customer = mongoose.model('Customer', customerSchema);
});