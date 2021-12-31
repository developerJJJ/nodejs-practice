const express = require("express");
const { createServer } = require("http");
const server = express();

// middleware
// change default file load path
server.use(express.static(__dirname + "/view"));

server.get("/", (req,res)=>{
    // use __dirname when you need subdirectory path 
    res.sendFile("index.html");
})

server.get("/about", (req,res)=> {
    res.sendFile(__dirname + "/about.html");
})

server.use((req, res) =>{
    res.sendFile(__dirname + "/view/404.html");
})

server.listen(3000, (err)=>{
    if (err) return console.log(err);
    console.log("The server is listening on 3000 port");
})