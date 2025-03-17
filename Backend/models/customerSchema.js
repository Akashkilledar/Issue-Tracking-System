
let mongoose = require('mongoose');

let customerSchema = new mongoose.Schema({
    name : {type:String , required:true},
    address : {type:String , required:true},
    city : {type:String , required:true},
    mobileno : {type:String , required:true},
    altmobileno : {type:String , required:true}
});

let Customers = mongoose.model('customer' , customerSchema);

module.exports = Customers;