const Publication = require("../models/Publication");
const User = require("../models/User");

const index = (req, res) => {
    res.json({
        message: "Welcome"
    })
}

const getUser = async ({body, session}, res) => {
    const user = await User.find(body.id);
    res.json({
        ...user
    })
}

module.exports = {
    index,
}