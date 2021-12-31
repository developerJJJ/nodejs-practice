const http = require("http");

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.write("<h1> Hello node.js</h1>");
        res.end();
    } else {
        res.write("<h1>Invalid url</h1>");    
    }
});

server.listen(3000,()=>{
     console.log("The server is listening on port 3000");
});