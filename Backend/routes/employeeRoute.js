
let express =require('express');

let Employees = require('../models/employeeSchema');

let router = express.Router();

// Get all employee list

router.get('/', async (req,res)=>{
    try{
         let AllEmpoyees = await Employees.find({});
        res.send({status : "Success", data: AllEmpoyees})
    }catch(err){
        res.send({status : "Failed", data: err})
    }
});

// Get single Employee by ID
router.get('/:id', async (req,res)=>{
    try{
        
        let employeeID = req.params.id
        
        let singleEmployee = await Employees.findById(employeeID)
        // console.log(singleEmployee);
        res.send({status:"Success" , data:singleEmployee})
    }catch(err){
        res.send({status : "Failed", data: err})
    }
    
})


// Create or Add Employee 
router.post('/', async (req,res)=>{
    try{
        
        let body =req.body
        
        let singleEmployee = await Employees.create({
            name : body.name,
            surname : body.surname,
            position : body.position,
            email : body.email,
            mobileno : body.mobileno,
            password : body.password,
        })
        res.send({status:"success", data:singleEmployee})
    }catch(err){
        res.send({status : "Failed", data: err})
        
    }
    
});


// Update Employee Data
router.put('/:id' , async (req,res)=>{
    try{
        
        let employeeID = req.params.id
        let body = req.body
        let updatedEmployee = await Employees.findByIdAndUpdate(employeeID, body , {new:true})
        // console.log(updatedEmployee);
        res.send({status:"success", data:updatedEmployee})
    }catch(err){
        res.send({status : "Failed", data: err})
        
    }
    
});

// Delete Employee Data
router.delete('/:id', async (req,res)=>{
    try{
        
        let employeeID = req.params.id
        let deletedEmployee = await Employees.findByIdAndDelete(employeeID)
        res.send({status:"Success", data:deletedEmployee})
    }catch(err){
        res.send({status : "Failed", data: err})

    }
})

module.exports = router;