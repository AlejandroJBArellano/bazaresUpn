const create  = require("../controllers/create");
const update  = require("../controllers/update");
const get = require("../controllers/get");
const erase  = require("../controllers/erase");

const router = require("express").Router(),
passport = require("passport");

router.get("/", get.index)

router.get('/auth/instagram', passport.authenticate('instagram', {scope: ["user_profile"]}), (req, res) => {});

router.get('/auth/10795/auth/callback', 
  passport.authenticate('instagram', { failureRedirect: '/login' }),
  function(req, res) {
    console.log("XD")
    // Successful authentication, redirect home.
    res.json(req.session);
});

module.exports = router