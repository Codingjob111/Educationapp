const mongoose=require('mongoose');
const person1111Schema=new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    password:String,
})
module.exports=mongoose.model("person1111",person1111Schema);

