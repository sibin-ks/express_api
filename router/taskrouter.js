const express=require("express")
const router=express.Router()
const {getall,addone,updateone,deleteone}=require("../controller/taskcontroller")

router.route("/").get(getall).post(addone)
router.route("/:id").put(updateone).delete(deleteone);

module.exports=router