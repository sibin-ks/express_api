const multer=require("multer")
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/book/")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+File.originalname)
    }
})

const book=multer({storage})

module.exports=book;