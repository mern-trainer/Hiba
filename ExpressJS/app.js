const express = require("express")
// const logRequest = require("./middlewares/log")
const todoRouter = require("./routes/todo.route")

// MVC - Model View Controller

const app = express()

app.use(express.json())

// app.use(logRequest)

// app.get("/", (request, response) => {
//     return response.status(200).send("Hello World")
// })

app.use("/todo", todoRouter)

// middleware => Middleware is a request handler that allows you to intercept and
// manipulate requests and responses before they reach route handlers.

// application middleware -> global middleware
// route middleware -> route specific middleware

app.listen(8080, () => {
    console.log("Server running on port 8080")
})

// Faster Server - Side Development
// Middleware
// Easy Routing
// Body Parsing

