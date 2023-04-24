const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const mongoose= require("mongoose");
const bodyParser= require("body-parser");
const session= require("express-session");
const passport = require("passport");
require("dotenv").config()

// we are creating an environment
// require("dotenv").config();
const User = require("./models/userModel")
// importing database file directly
const config = require("./config/database");
const diarlyRoutes = require("./routes/diarlyRoutes");
const homeRoutes = require("./routes/homeRoute");
const hortculturesRoutes = require("./routes/hortculturesRoutes");
const indexRoutes = require("./routes/indexRoute");
const loginRoutes = require("./routes/loginRoute");
const poultryRoutes= require("./routes/poultryRoute");
const registerRoutes= require("./routes/registerRoute");
const uploadsRoutes = require("./routes/uploads");
const signupRoutes = require("./routes/signupRoute")
const aoRoutes = require("./routes/aoRoutes");
const foRoutes = require("./routes/foRoutes");
const ufRoutes = require("./routes/ufRoutes");
const agricofficerRoutes = require("./routes/agricofficerRoute");
const AllRoutes = require("./routes/AllRoute");
const productsRoutes = require("./routes/productsRoute");
const urbanregRoutes = require("./routes/urbanregRoutes");
// const {config}  = require('process');

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}))

// * Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


// creating a connection between the controller and database
mongoose.connect(config.database,{
    //useNEW collects data then formats it
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db= mongoose.connection
// checking if db has connected
db.once("open", ()=>{
console.log("connected to db")
})
db.on("error",(err)=>{
console.error(err)
})

app.set("view engine","pug");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));


app.use("/",diarlyRoutes);
app.use("/",homeRoutes);
app.use("/",hortculturesRoutes);
app.use("/",indexRoutes);
app.use("/",loginRoutes);
app.use("/",poultryRoutes);
app.use("/",registerRoutes);
app.use("/",uploadsRoutes);
app.use("/",signupRoutes);
app.use("/",aoRoutes);
app.use("/",foRoutes);
app.use("/",ufRoutes);
app.use("/",agricofficerRoutes);
app.use("/",AllRoutes);
app.use("/",productsRoutes);
app.use("/",urbanregRoutes);
app.get("*", (req,res)=>{
    res.status(404).send("page does not exist")
})



app.listen(3000, () => console.log('listening on port 3000'));



