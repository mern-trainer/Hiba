const express = require("express")

const app = express()

// GET, POST, PUT, DELETE, PATCH

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
})

app.listen(8080, () => {
    console.log("Server running on port 8080")
})

// Faster Server - Side Development
// Middleware
// Easy Routing
// Body Parsing

