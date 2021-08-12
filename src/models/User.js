const { Schema } = require("mongoose");
const User = new Schema({
    email: {
        required: true,
        unique: true,
        type: String
    },
    username: {
        required: true,
        unique: true,
        type: String
    },
    picture: String
}, {
    timestamps: true,
    versionKey: false
})
module.exports = User
