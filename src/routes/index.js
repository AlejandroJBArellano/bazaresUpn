const create  = require("../controllers/create");
const update  = require("../controllers/update");
const get = require("../controllers/get");
const erase  = require("../controllers/erase");

const router = require("express").Router(),
passport = require("passport");

router.get("/", get.index)

router.get('/auth/instagram', passport.authenticate('instagram', {scope: ["profile"]}), (req, res) => {});

router.get('/auth/instagram/callback', 
  passport.authenticate('instagram', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

module.exports = router