const mongoose = require('mongoose')

const newSettingSchema = new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    phoneNumber:{type:String},
    streetAddress:{type:String},
    zipCode:{type:String},
    city:{type:String},
    state:{type:String},
    country:{type:String},

})
const settingData = mongoose.model('settingUser',newSettingSchema)


module.exports =settingData;