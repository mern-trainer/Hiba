const express = require("express")
const databaseConnection = require("./Config/db.js")
const todoRoute = require("./Routes/todo.route.js")
require("dotenv").config()

const app = express()
databaseConnection()

app.use(express.json())
app.use("/api/todo", todoRoute)

app.listen(process.env.PORT || 8081, () => {
    console.log(`Listening on port ${process.env.PORT || 8081}`)
})