const fs = require("fs");
fs.writeFileSync("./hello.txt", "hello world");

const data = fs.readFileSync("./hello.txt", {encoding:"utf-8"});
console.log(data);