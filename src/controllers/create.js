const User = require("../models/User"), 
Publication = require("../models/Publication");

const newUser = async ({body, session}, res) => {
    const userNew = new User(body);
    await userNew.save();
    res.json({
        message: "successfully created"
    })
}