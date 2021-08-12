require("dotenv").config()
const express = require("express"),
path = require("path"),
router = require("./routes/index"),

//Inicializations
app = express();
require("./database");

// settings

app.set("port", process.env.PORT)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// middleweares

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes

app.use(router)

// errors

// static files

app.use(express.static(path.join(__dirname, "public")))

// start the server

app.listen(app.get("port"), _ => console.log(`The server is currently listening in http://localhost:${app.get("port")}/`))