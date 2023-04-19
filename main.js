require('dotenv').config()
const express=require("express"),
app=express(),
port=process.env.port;
app.set('view engine' , 'ejs');

app.use("/students",require("./routes/web"))
app.listen(port,()=>{
    console.log("server is running")
})