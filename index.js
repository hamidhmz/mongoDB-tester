const express = require("express");
const app = express();


app.get("/mongo-client/:count",async (req,res)=>{
    res.send("hi"+req.params.count);
});
app.get("/mongoose/:count",async (req,res)=>{
    res.send("hi"+req.params.count);
});

app.listen(process.env.PORT,()=>{
    console.log("app is running in "+ process.env.PORT);
});