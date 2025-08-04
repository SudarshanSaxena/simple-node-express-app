const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.status(200).json({
        message: "success"
    })
})
app.get("/hello",(req,res)=>{
    res.status(200).json({
        message: "Hello"
    })
})


app.listen(5000,(err)=>{
    if(err){
        console.err(err)
        return
    }

    console.log("server started on port 5000")

})