const create  = require("../controllers/create");
const update  = require("../controllers/update");
const get = require("../controllers/get");
const erase  = require("../controllers/erase");

const router = require("express").Router();

router.get("/", get)

module.exports = router