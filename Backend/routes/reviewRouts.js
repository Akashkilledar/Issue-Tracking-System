let express = require('express');

let Reviews = require('../models/reviewSchema')

let router = express.Router();


// Creating a review by Employee regarding to the Issue 
router.post('/', async (req,res)=>{
    try{

        
        let {issueID, employeeID, review}=req.body
        
        let createdReview = await Reviews.create({issueID, employeeID, review})
        res.send({status : "Success", data:createdReview})
    }catch(err){
        res.send({status:"Failed", data:"Something Went Wrong",err})
    }
});

// Get all the Reviews of the Employees  for a Issue 
router.get('/:id', async (req,res)=>{
    try{
        
        let issueID = req.params.id 
        
        let AllReviwsOfIssue = await Reviews.find({issueID})
        .populate("issueID")
        .populate("employeeID")
        
        res.send({status:"Success", data:AllReviwsOfIssue})
    }catch(err){
        res.send({status:"Failed", data:"Something Went Wrong",err})

    }
});

module.exports =router;