const { Router } = require("express")
const userController = require("../controllers/user.controller")

const userRoute = Router()

userRoute.post("/signup", userController.signup)
userRoute.get("/login", userController.login)

module.exports = userRoute

