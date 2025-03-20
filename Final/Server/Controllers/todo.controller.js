const TodoModel = require("../Models/todo.model")

const createTodo = async (request, response) => {
    try {
        const { title, description } = request.body
        if (!title || !description) {
            return response.status(400).send({
                message: "Title and description are required"
            })
        }
        const todo = await TodoModel.create(request.body)
        return response.status(201).send(todo)
    } catch (error) {
        if(error.message.startsWith("E11000")) {
            return response.status(400).send({
                message: "Title already exists"
            })
        }
        return response.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
}

const getTodo = async (request, response) => { 
    try {
        const todos = await TodoModel.find()
        return response.status(200).send(todos)
    } catch (error) {
        return response.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
}

const deleteTodo = async (request, response) => {
    try {
        const { id } = request.params
        const res = await TodoModel.findOneAndDelete({ _id: id })
        if (res) {
            return response.status(200).send({
                message: "Todo deleted successfully",
                deleted: res
            })
        }
        return response.status(404).send({
            message: "Todo not found"
        })
    } catch (error) {
        return response.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
}

const updateTodo = async (request, response) => {
    try {
        const { id } = request.params
        const res = await TodoModel.updateOne({ _id: id }, { $set: request.body })
        if(res.matchedCount == 1 && res.modifiedCount == 1) {
            return response.status(200).send({
                message: "Todo updated successfully"
            })
        }
        return response.status(404).send({
            message: "Todo not found"
        })
    } catch (error) {
        return response.status(500).send({
            message: error.message || "Internal Server Error"
        }) 
    }
}

module.exports = { createTodo, getTodo, deleteTodo, updateTodo }