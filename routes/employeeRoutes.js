const express=require('express');
const router=express.Router();
const empModel=require('../models/employeeModels');

router.get('/',async(req,res)=>{
    try{
        const employees=await empModel.find();
        res.json(employees);
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

router.post('/',async(req,res)=>{
    const {employeeId,fullName,department,designation,salary,email,phone,joiningDate,status}=req.body;
    try{
        const newEmp=new empModel({employeeId,fullName,department,designation,salary,email,phone,joiningDate,status});
        await newEmp.save();
        res.status(201).json(newEmp);
    }catch(err){
        res.status(400).json({error:err.message});
    }
});

router.get('/:employeeId',async(req,res)=>{
    try{
        const emp=await empModel.findOne({employeeId:req.params.employeeId});
        if(!emp){
            return res.status(404).json({error:'Employee not found'});
        }
        res.json(emp);
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

router.put('/:employeeId',async(req,res)=>{
    try{
        const updatedEmployee=await empModel.findOneAndUpdate({employeeId:req.params.employeeId},req.body,{new:true});
        if(!updatedEmployee){
            return res.status(404).json({error:'Employee not found'});
        }
        return res.status(200).json('Employee updated successfully');
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

router.delete('/:employeeId',async(req,res)=>{
    try{
        const deletedEmployee=await empModel.findOneAndDelete({employeeId:req.params.employeeId});
        if(!deletedEmployee){
            return res.status(404).json({error:'Employee not found'});
        } 
         res.json({message:'Employee deleted successfully'});
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

module.exports=router;