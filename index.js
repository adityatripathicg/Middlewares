const express = require("express");
const app = express();

app.use((req,res, next)=>{
    console.log("Hi, I'm middleware");
    next();
});
//logger 
app.use((req,res, next)=>{
    req.responseTime = new Date(Date.now()).toString();
    console.log(req.method, req.path,req.responseTime, req.hostname);
    return next(); // next() and return next() both work same but return next() does not allow any code to run after return.
});

app.get("/",(req,res)=>{
    res.send("Hello, I'm Root");
});

app.listen(8080,()=>{
    console.log("App listening to "+ 8080);
});