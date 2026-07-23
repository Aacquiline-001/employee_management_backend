const express=require('express');
const app=express();
require('dotenv').config();

const mongoose=require('mongoose');
const db=require('./connection');
const port=process.env.PORT || 3000;

const empRoutes=require('./routes/employeeRoutes');
const empModel=require('./models/employeeModels');

app.use(express.json());
app.use('/api/employees',empRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});