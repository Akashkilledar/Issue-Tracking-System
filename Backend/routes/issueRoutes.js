let express = require('express');

let Issues = require('../models/issueSchema');

let router = express.Router();


// Assign Issue of a Customer to a Employee
router.post('/', async (req,res)=>{
    try{
        let {customerID,issue, employeeID,status} = req.body
        
        let singleIssueAssigned = await Issues.create({customerID, issue, employeeID, status})
        res.send({status:"Success", data:singleIssueAssigned})
    }catch(err){
        res.send({status : "Failed", data:err})
    }
});


// Get the Assigned Issue of the Customer for respective Employee
router.get('/:id', async (req,res)=>{
    try{

        let employeeID = req.params.id
        
        let assignedIssues = await Issues.find({employeeID})
        .populate("customerID")
        .populate("employeeID")
        
        res.send({status:"Success", data:assignedIssues})
    }catch(err){
        res.send({status:"Failed", data: "Something went Wrong",err})
    }
});



// Update the Issue Status
router.put('/:id', async (req,res)=>{
    try{
        
        let issueID = req.params.id 
        
        let body = req.body

         // If status is being updated to "Closed", update closedAt
        //  if (body.status && body.status.toLowerCase() === "closed") {
        //     body.closedAt = new Date();
        // }
        
        let updatedIssueStatus = await Issues.findByIdAndUpdate(issueID, body, {new:true})
        res.send({status:"Success", data:updatedIssueStatus})
    }catch(err){
        res.send({status:"Failed", data: "Something went Wrong",err})
    }
});

module.exports= router;