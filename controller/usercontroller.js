const user=require("../models/usermodel")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const getlogin=(req,res)=>{
   
} 
const login=async (req,res)=>{
   const {email,password}=req.body
   if(!email||!password)
{
   const error=new Error("All fields are require")
   error.statuscode=400
   throw error
}
const User=await user.findOne({email})
if(!User)
{
    const error=new Error("invalide Email")
   error.statuscode=401
   throw error
}
if(await bcrypt.compare(password,User.password))
{
const accessToken=jwt.sign(
   {
      userId:User._id,
      tokenTYpe:"access"
   },
   process.env.ACCESS_TOKEN_SECRET,
   {expiresIn:"15m"}
);
const refreshToken=jwt.sign(
   {
      userId:User._id,
      tokenTYpe:"refresh"
   },
   process.env.REFRESH_TOKEN_SECRET,
   {expiresIn:"7d"}
);
res.cookie("refreshToken",refreshToken,{
   httpOnly:true,
   secure:true,
   sameSite:"lax",
   maxAge:7*24*60*60*1000
});
res.status(200).json({
   message:"Login successful",
   accessToken
})
}
else
{
   const error=new Error("invalide password")
   error.statuscode=401
   throw error
}

}
const getregister=async (req,res)=>{         
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
        throw error
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