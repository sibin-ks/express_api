const book=require("../models/bookmodel")
const getall=((req,res)=>{

const data=
    res.json({data})
})
const getone=((req,res)=>{

const data=
    res.json({data})
})
const addone=(async (req,res)=>{
    let {bookname,bookprice,stock}=req.body
    let image=(`uploads/book/${req.file.filename}`)
    if(!bookname||!bookprice||!stock||!req.file)
    {
   const error=new Error("All fields are require")
   error.statuscode=400
   throw error
    }
    const data=await book.create({
        bookname:bookname,
        bookprice:bookprice,
        stock:stock,
        image:image})
        res.status(201).json({data})
    
})

const updateone=(req,res)=>
{
    res.json("updated")
}

const deleteone=(req,res)=>{
    res.json("delete")
}


module.exports={getall,addone,updateone,deleteone,getone}