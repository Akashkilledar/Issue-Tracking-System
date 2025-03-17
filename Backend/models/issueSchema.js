let mongoose = require('mongoose');

let issueSchema = new mongoose.Schema({
    customerID : {type : mongoose.Types.ObjectId, ref :"customer" , required:true},
    issue : {type : String, required :true},
    createdAt : {type : Date, default:Date.now},
    employeeID :{type: mongoose.Types.ObjectId, ref : "employee", required:true},
    status : {type : String, enum:["open", "closed"], required: true},
    closedAt :{type : Date}
});

issueSchema.pre('save', function (next) {
    if (this.status === "closed" && !this.closedAt) {
        this.closedAt = new Date();
    }
    next();
});

issueSchema.pre('findOneAndUpdate', function (next) {
    let update = this.getUpdate();
    
    if (update.status && update.status.toLowerCase() === "closed") {
        update.closedAt = new Date(); // Ensure closedAt is always updated
    }

    next();
});


let Issues = mongoose.model('issue', issueSchema);

module.exports =Issues;