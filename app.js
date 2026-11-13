const express=require("express")
const app=express()
require("dotenv").config()
const port=process.env.PORT
app.use(express.json())
const taskrouter=require("./router/taskrouter")
const errorHandler=require("./middleware/ErrorHandler")

app.use("/api/task",taskrouter)

app.use(errorHandler)
app.listen(port,()=>{
    console.log("server running")
})