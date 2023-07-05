/* before object destructring */

/* const helper = require("./helper")

const total = helper.sum(10,200)
console.log("Total:",total) */

/*The object distructuring help us e acces objests easyly */
const {sum} = require("./helper")
/* when using  a third party module that comes with node their is no need to give the path */
/* const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from James");
});
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
 */

/* require is used to import a function from a spacified path */
/* const total = sum(10,200)
console.log("Total:",total) */

/* const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World, good morning')
})

app.listen(3000) */

const fs = require("fs")
const fileName = "target.txt"


/***synchonomous****/  
/* const data = fs.readFileSync(fileName)
console.log(data.toString())
console.log("nodejs sync programm..") */

fs.watch(fileName , () => {console.log("file changed")})


/* lets watch for any changes on the target.txt */

 /***  asynchronomous  ***/
fs.readFile(fileName , (err,data) => {
  if(err){
    console.log(err)
  }
    console.log(data.toString())
  
})
console.log("nodejs async programm..")
