const express=require("express");
const app=express();

const port = 8080;

app.listen(port,(req,res)=>{
  console.log(`server started at port : ${port}`);
});

app.get("/instagram/:username",(req,res)=>{
let {username} = req.params;
const instadata = require("./data.json");
console.log(instadata);
console.log(username);
res.render("insta.ejs",{data:instadata[username]});
});