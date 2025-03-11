const express = require("express")
const todoRouter = require("./routes/todo.route")
const userRoute = require("./routes/user.route")
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())

app.use("/todo", todoRouter)
app.use("/users", userRoute)

app.listen(8081, () => {
    console.log("Server running on port 8081")
})


// bcrypt -> hash