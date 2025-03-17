
let mongoose = require('mongoose');

let reviewSchema = new mongoose.Schema({
    issueID : {type : mongoose.Types.ObjectId , ref:"issue", required:true},
    reviewedAt : {type : Date, default:Date.now},
    employeeID : {type : mongoose.Types.ObjectId , ref:"employee", required:true},
    review : {type : String , required :true}
});

let Reviews = mongoose.model('review', reviewSchema);

module.exports = Reviews;
