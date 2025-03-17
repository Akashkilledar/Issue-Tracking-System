
let mongoose =require('mongoose');

let employeeSchema = new mongoose.Schema({
    name : {type : String , required:true},
    surname : {type : String , required:true},
    position : {type : String , required:true},
    email : {type : String , required:true, unique : true},
    mobileno : {type: String, required:true},
    password : {type:String, required:true}
});

let Employees = mongoose.model("employee", employeeSchema);

module.exports = Employees;