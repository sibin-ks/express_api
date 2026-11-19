const express=require("express")
const router=express.Router()
const validate=require("../middleware/validateToken")
const {getall,addone,updateone,deleteone}=require("../controller/taskcontroller")
router.route("/").get(validate,getall).post(validate,addone)
router.route("/:id").put(updateone).delete(deleteone);





module.exports=router