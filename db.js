const moongose = require("mongoose")
const mongodb = require('mongodb')


moongose
.connect("mongodb+srv://anish:anish@cluster0.xuf0z19.mongodb.net/mobile_banking", {
   useNewUrlParser: true, //handle the parsing of the MongoDB connection string used in Mongodb Node.js Driver
   useUnifiedTopology: true, //topology engine used in Mongodb Node.js Driver
   family: 4,
 })
 .then(()=>{
    console.log('database is connectesd');
   
 })
 .catch((error)=>{
    console.log("error ",error);
})