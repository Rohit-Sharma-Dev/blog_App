const express =require('express')

const mysql =require("mysql")
const bodyparser =require('body-parser')

const knex=require('./models/database')

const app =express()

const jwt =require('jsonwebtoken')
const bodyParser = require('body-parser')




app.use(express.json())

const isUserAuthenticated = require('./authentication/auth');

let login=express.Router();
app.use('/',login);
require('./routes/login')(login,knex,jwt);




let signup=express.Router();
app.use('/',signup);
require('./routes/signup')(signup,knex);

    // res.send(signup)

let deleted =express.Router();
app.use("/",deleted);
require("./routes/deleteuser")(deleted,knex);


let show =express.Router();
app.use("/",show);
require("./routes/show")(show,knex);


let update =express.Router();
app.use("/",update)
require("./routes/update")(update,knex)







app.listen(3000,()=>{
    console.log('connected...........');
})

