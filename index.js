const express = require('express');
const app =express()
const connectDb= require('./db')
const userRoutes = require('./routes/userRoutes')



app.use(express.json())
app.use(userRoutes);


//localhost 
app.listen(3000,()=>{
    console.log('localhost 3000 connected');
})