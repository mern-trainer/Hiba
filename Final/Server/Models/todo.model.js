const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: true
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const TodoModel = model("todos", todoSchema);

module.exports = TodoModel 