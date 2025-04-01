const express= require("express");
const app = express();
const port=3000

app.get("/",(req,res)=>{
    res.send("Server is running fine on Port : " + port + "  .....")
}) 

app.listen(port,(req,res)=>{
    console.log("server is running on port " + port + " ....")
})