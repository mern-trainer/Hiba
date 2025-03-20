const express = require("express")
const databaseConnection = require("./Config/db.config")
require("dotenv").config()

const app = express()
databaseConnection()

app.listen(process.env.PORT || 8081, () => {
    console.log(`Listening on port ${process.env.PORT || 8081}`)
})