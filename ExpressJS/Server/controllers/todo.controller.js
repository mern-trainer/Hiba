const { v4 : uuidv4 } = require("uuid")

let todoList = []

const getTodoList = (_request, response) => {
    return response.status(200).send(todoList)
}

const createTodo = (request, response) => {
    const { title } = request.body
    if (!title) {
        return response.status(400).send({ message: "Please provide a title" })
    }
    const index = todoList.findIndex(todo => todo.title.toLowerCase() === title.toLowerCase())
    if (index > -1) {
        return response.status(409).send({ message: "Task already exists" })
    }
    const dateTime = new Date().toISOString()
    const taskObj = {
        id: uuidv4(),
        title,
        completed: false,
        createdAt: dateTime,
        updatedAt: dateTime
    }
    todoList.unshift(taskObj)
    return response.status(201).send({ created: taskObj, message: "Task created successfully" })
}

const deleteTodo = (request, response) => {
    const { id } = request.params
    if (!id) {
        return response.status(400).send({ message: "Please provide an id" })
    }
    const deleted = todoList.find(todo => todo.id === id)
    if (!deleted) {
        return response.status(404).send({ message: "Task not found" })
    }
    todoList = todoList.filter(todo => todo.id !== id)
    return response.status(200).send({deleted, message: "Task deleted successfully"})
}

const updateTodo = (request, response) => {
    const { id } = request.params
    const { completed, title } = request.body
    if (!id) {
        return response.status(400).send({ message: "Please provide an id" })
    }
    const index = todoList.findIndex(todo => todo.id === id)
    if (index == -1) {
        return response.status(404).send({ message: "Task not found" })
    }
    if (completed != undefined && (completed == true || completed == false)) {
        todoList[index].completed = completed
    }
    if (title != undefined) {
        todoList[index].title = title
    }
    return response.status(200).send({updated: todoList[index], message: "Task updated successfully"})
}

module.exports = {
    getTodoList,
    createTodo,
    deleteTodo,
    updateTodo
}