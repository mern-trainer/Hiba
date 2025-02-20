const express = require("express")
const { v4: uuidv4 } = require("uuid")

const app = express()

app.use(express.json())

let todoList = []

app.get("/", (_request, response) => {
    return response.status(200).send(todoList)
})

app.post("/", (request, response) => {
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
})

app.delete("/:id?", (request, response) => {
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
})

app.patch("/:id?", (request, response) => {
    const { id } = request.params
    const { completed, title } = request.body
    console.log(completed, title);
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
})

app.listen(8080, () => {
    console.log("Server running on port 8080")
})

// Faster Server - Side Development
// Middleware
// Easy Routing
// Body Parsing

