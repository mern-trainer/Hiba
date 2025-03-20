const { Router } = require("express");
const todoController = require("../Controllers/todo.controller.js")

const todoRoute = Router()

todoRoute.post("/", todoController.createTodo)
todoRoute.get("/", todoController.getTodo)
todoRoute.delete("/:id", todoController.deleteTodo)
todoRoute.patch("/:id", todoController.updateTodo)

module.exports = todoRoute