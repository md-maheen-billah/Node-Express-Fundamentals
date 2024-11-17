//local modules
const {add,a} = require('./local-1')
const {add:add2,a:a2} = require('./local-2')

console.log(add2(3,4,5));

//builtin modules
const path = require("path")
console.log(path.join("/D:/Next/node-express-fundamentals/","local-1.js"));
