const { Router } = require("express")
const controller = require("../controllers/todo.controller")

const todoRouter = Router()

todoRouter.get("/", controller.getTodoList)
todoRouter.post("/", controller.createTodo)
todoRouter.delete("/:id?", controller.deleteTodo)
todoRouter.patch("/:id?", controller.updateTodo)

module.exports = todoRouter
