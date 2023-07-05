const express = require('express');
const bodyParsel = require("body")

const app = express();
//bring in routes / importing the route
const postRoutes = require("./routes/post")
const expressValidator = require('express-validator')
/* ***middle ware*** --.use() **.next()*/
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
//mango gives us this function > connect provide the data base url
mongoose.connect(process.env.MANGO_URI)
//then takes function as an argument
.then(() => console.log('db connected'))
//the bellow method gives us errors
mongoose.connection.on("error",err => {
   console.log(`DB conection error: ${err.message}`)
})
//we can use below method 
//the use of morgan npm that shows use were the rquest are caming from (which port we are receiving from)
const morgan = require("morgan")
//to usethis middleware known as morgan we need to use tthe .use method middle ware excecute in the middle
app.use(morgan("dev"))



//here we get the route that we are importing handling only one route in a real app we reqest file
//.use makes this route to be a middleware
app.use('/', postRoutes);
app.use(bodyParsel.json());
app.use(expressValidator());

const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Server listening on port ${port}`);
});
