const express = require("express");
const app = express();

app.use("/random",(req,res, next)=>{
    console.log("Hi, I'm only for random middleware");
    next();
});
//logger 
app.use((req,res, next)=>{
    req.responseTime = new Date(Date.now()).toString();
    console.log(req.method, req.path,req.responseTime, req.hostname);
    return next(); // next() and return next() both work same but return next() does not allow any code to run after return.
});
const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new Error("Access Denied");
};
app.get("/api",checkToken, (req,res)=>{
    res.send("Data");
});

app.get("/",(req,res)=>{
    res.send("Hello, I'm Root");
});

app.get("/wrong",(req,res)=>{
    abcd = abcd;
});
//404
app.get((req,res)=>{
    res.send("Page Not Found");
});

app.listen(8080,()=>{
    console.log("App listening to "+ 8080);
});