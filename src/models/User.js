import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
fullName : {
    type : String,
    required: true,
},
age :{
    type:Number,
    min:12,
    required : true,
},
password:{
    type:String,
    minLength: 8,
},
email :{
    type:String,
    unique : true,
    required: true,
},
rollNum: {
    type: String,
    unique: true,
},
profilePic :{
    type:String,
},
role:{
    type:String,
    required: true,
}
})


const userModel = mongoose.model("users", userSchema)

export default userModel