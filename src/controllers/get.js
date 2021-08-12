const Publication = require("../models/Publication");
const User = require("../models/User");

const index = (req, res) => {
    res.render("index", {
        title: "Bazares de Uruapan - Home",
    })
}

module.exports = index