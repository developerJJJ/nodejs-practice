const express = require("express");
const hbs = require("express-handlebars");
const server = express();

server.set('view engine', 'hbs');
server.engine('hbs', hbs.engine({
  extname: 'hbs',
  defaultLayout: 'layout.hbs',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials'
}))

// middleware
// change default file load path
server.use(express.static(__dirname + "/views"));

server.get('/', (req, res) => {
    res.render("home", {
        message: "Hello Node.js!"
    });
})

server.listen(3000, (err)=>{
    if (err) return console.log(err);
    console.log("The server is listening on 3000 port");
})