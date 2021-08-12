const { Schema } = require("mongoose");

const Publication = new Schema({
    author: {
        type: Schema.ObjectId,
        ref: "User"
    },
    picture: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
})

module.exports = Publication