require("dotenv").config()
const express = require("express"),
path = require("path"),
router = require("./routes/index"),
passport = require("passport"),
session = require("express-session"),
morgan = require("morgan");

//Inicializations
app = express();
require("./passport/insta-auth");
require("./database");

// settings

app.set("port", process.env.PORT)

// middleweares

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: "keyboard cat"
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("dev"))
// routes

app.use(router)

// errors

// static files

app.use(express.static(path.join(__dirname, "public")))

// start the server

app.listen(app.get("port"), _ => console.log(`The server is currently listening in http://localhost:${app.get("port")}/`))