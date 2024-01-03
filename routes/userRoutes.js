const express = require('express');
const router = express.Router();

const User = require('../models/userLoginmodel')

router.post('/userData',async (req,res)=>{
    try{
        const newUser = new User ({
            phoneNumber:req.body.phoneNumber,
            password:req.body.password
        })
        await newUser.save();
        res.status(200).json({message:'Message sent'})
    }
    catch(error){

    }
})
router.get('/getUserData',(req,res)=>{
    User.find()
    .then(data=> res.send(data))
    .catch(err=>console.log(err))

})
module.exports= router;