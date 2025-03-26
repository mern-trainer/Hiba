const { Router } = require("express");
const aggregateControler = require("../Controllers/aggregate.controller.js")

const aggregateRoute = Router()

aggregateRoute.get("/", aggregateControler.getInfo)

module.exports = aggregateRoute