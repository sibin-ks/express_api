const express=require("express")
const router=express.Router()
const {getlogin,getregister,register,login}=require("../controller/usercontroller")


router.route("/register").get(getregister).post(register)
router.route("/login").get(getlogin).post(login)

module.exports=router