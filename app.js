const express = require("express");
const { createServer } = require("http");
const server = express();

server.get("/", (req,res)=>{
    // use __dirname when you need subdirectory path 
    res.sendFile(__dirname + "/index.html");
})

server.get("/about", (req,res)=> {
    res.sendFile(__dirname + "/about.html");
})

server.listen(3000, (err)=>{
    if (err) return console.log(err);
    console.log("The server is listening on 3000 port");
})