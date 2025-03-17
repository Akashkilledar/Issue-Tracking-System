
let express = require('express');

let Customers =require('../models/customerSchema');

let router = express.Router()

// Get All Customers List
router.get('/' , async (req,res)=>{
    try{

        let AllCustomers = await Customers.find({})
        res.send({status:"Success", data:AllCustomers})
    }catch(err){
        res.send({status:"Failed", data:err})
    }
});

// Get Single Customer
router.get('/:id', async (req,res)=>{
    try{
        
        let customerID = req.params.id
        let singleCustomer = await Customers.findById(customerID)
        res.send({status:"Success", data:singleCustomer})
    }catch(err){
        res.send({status:"Failed", data:err})

    }
});

// Create or Add Customer
router.post('/', async (req,res)=>{
    try{

        let body = req.body
        let singleCustomer = await Customers.create({
            name : body.name,
            address : body.address,
            city : body.city,
            mobileno : body.mobileno,
            altmobileno : body.altmobileno
        })
        res.send({status : "Success", data:singleCustomer})
    }catch(err){
        res.send({status:"Failed", data:err})
    }
});

// update a customer Data
router.put('/:id', async (req,res)=>{
    try{
        
        let customerID = req.params.id
        let body = req.body
        
        let updatedCustomer = await Customers.findByIdAndUpdate(customerID, body , {new:true})
        res.send({status : "Success", data: updatedCustomer})
    }catch(err){
        res.send({status:"Failed", data:err})
        
    }
});

// Delete a Customer Data
router.delete('/:id', async (req,res)=>{
    try{
        
        let customerID = req.params.id 
        let deletedCustomer = await Customers.findByIdAndDelete(customerID)
        res.send({status : "Success", data: deletedCustomer})
    }catch(err){
        res.send({status:"Failed", data:err})

    }
})


module.exports = router;