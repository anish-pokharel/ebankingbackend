const mongoose = require('mongoose')


const UserSchema=new mongoose.Schema({
    phoneNumber: { type: String },
    password: { type: String },
})
const User = mongoose.model('user', UserSchema)



module.exports = User;