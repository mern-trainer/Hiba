const { Schema, model } = require("mongoose");

const schema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    job: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const UserModel = model("users", schema);

module.exports = UserModel 