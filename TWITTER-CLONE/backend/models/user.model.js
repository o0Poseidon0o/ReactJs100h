import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    fullName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    followers:[{
        type:mongoose.Schema.Types.ObjectId,//to get the id of the user
        ref:"User",
        default:[]
    }],
    profileImg:{
        type:String,
        default:"",
    },
    bio:{
        type:String,
        default:""
    },
    link:{
        type:String,
        default:""
    }
},{timestamps:true})

const User = mongoose.model("User",userSchema)
export default User