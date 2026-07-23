const express=require('express');
const mongoose=require('mongoose');
const empSchema=new mongoose.Schema({
    employeeId:{
        type:String,
        required:[true,'Employee ID is required'],
        unique:true,
        match:[/^EMP\d{3,}$/,'Employee ID must match pattern EMP001, EMP002, etc.']
    },
    fullName:{
        type:String,
        required:[true,'Name is required'],
        minlength:[3,'Name must contain at least 3 characters']
    },
    department:{
        type:String,
        required:[true,'Department is required']
    },
    designation:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:[true,'Salary is required'],
        min:[15000,'Salary must be at least ₹15000']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,'Enter a valid email address']
    },
    phone:{
        type:String,
        required:true,
        match:[/^\d{10}$/,'Invalid phone number']
    },
    joiningDate:{
        type:Date,
        required:true,
        default:Date.now
    },
    status:{
        type:String,
        enum:{
            values:['Active','Inactive'],
            message:'Invalid employee status'
        }
    }
});

module.exports=mongoose.model('employees',empSchema);