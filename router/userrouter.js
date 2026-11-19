const express=require("express")
const router=express.Router()
const {getlogin,getregister,register,login,Logout,Refresh}=require("../controller/usercontroller")


router.route("/register").get(getregister).post(register)
router.route("/login").get(getlogin).post(login)
router.route("/refresh").post(Refresh)
router.route("/logout").post(Logout)

module.exports=router