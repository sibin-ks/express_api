const express=require("express")
const app=express()
require("dotenv").config()
const cookieParser = require("cookie-parser");
const port=process.env.PORT
const taskrouter=require("./router/taskrouter")
const userrouter=require("./router/userrouter")
const errorHandler=require("./middleware/ErrorHandler")
const connect=require("./config")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/uploads",express.static("uploads"))
connect()

app.use(cookieParser());
app.use("/api/task",taskrouter)
app.use("/auth" , userrouter)

app.use(errorHandler)
app.listen(port,()=>{
    console.log(`server running @ ${port}`)
})