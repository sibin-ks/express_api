const express=require("express")
const router=express.Router()
const validate=require("../middleware/validateToken")
const bookmulter=require("../middleware/bookmulter")
const {getall,addone,updateone,deleteone,getone}=require("../controller/taskcontroller")
router.use(validate)
router.route("/").get(getall).post(bookmulter.single("image"),addone)
router.route("/:id").get(getone).put(bookmulter.single("image"),updateone).delete(deleteone);





module.exports=router