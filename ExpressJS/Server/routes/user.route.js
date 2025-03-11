const { Router } = require("express")
const userController = require("../controllers/user.controller")
const { authMiddleware } = require("../middlewares/auth")

const userRoute = Router()

userRoute.post("/signup", userController.signup)
userRoute.get("/login", userController.login)
userRoute.get("/access", authMiddleware, userController.access)

module.exports = userRoute

