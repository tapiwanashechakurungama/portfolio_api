import mongoose from "mongoose"


const UserSchema = new mongoose.Schema({

  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },

},{timestamps:true})


const UserModel = new mongoose.model("User" , UserSchema)

export default UserModel