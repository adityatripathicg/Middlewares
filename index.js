const express = require("express");
const app = express();

app.use((req,res)=>{
    console.log("Hi, I'm middleware");
    res.send("Middleware Finished!");
});

app.get("/",(req,res)=>{
    res.send("Hello, I'm Root");
});

app.listen(8080,()=>{
    console.log("App listening to "+ 8080);
});