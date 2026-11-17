const user=require("../models/usermodel")
const bcrypt=require("bcrypt");
const getlogin=(req,res)=>{
}
const getregister=(req,res)=>{

} 
const login=(req,res)=>{
}
const register=async (req,res)=>{
     const{username,email,password}=req.body
     if(!username || !email || !password)
     {
        const error=new Error (`All fields are required`)
        error.statuscode=400
        throw error
     }
     const existUser= await user.findOne({email})
     if(existUser)
     {
        const error=new Error("email already exist")
         error.statuscode=400
        throw erro
     }

     const hashpass=await bcrypt.hash(password,10)
     const UserData= await user.create({
        username:username,
        email:email,
        password:hashpass
     })
    res.json(UserData)

} 
module.exports={getlogin,getregister,login,register}