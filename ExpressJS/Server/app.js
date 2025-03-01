const express = require("express")
const todoRouter = require("./routes/todo.route")
const userRoute = require("./routes/user.route")

const app = express()

app.use(express.json())

app.use("/todo", todoRouter)
app.use("/users", userRoute)

app.listen(8080, () => {
    console.log("Server running on port 8080")
})


// bcrypt -> hash