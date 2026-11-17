const getall=((req,res)=>{
const data=[{task:"cleaning",description:"cleaning",status:"pending"},
            {task:"study",description:"study",status:"pending"}]
    res.json({data})
})

const addone=((req,res)=>{
    let {task,description,status}=req.body
    if(!task||!description||!status)
    {
        res.json(error)
    }
    const data={
        task:task,
        description:description,
        status:status}
        res.json({data})
})

const updateone=(req,res)=>
{
    res.json("updated")
}

const deleteone=(req,res)=>{
    res.json("delete")
}


module.exports={getall,addone,updateone,deleteone}