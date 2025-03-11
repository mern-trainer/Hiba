// headers, authorization
require("dotenv").config()
const jwt = require("jsonwebtoken")

const authMiddleware = async (request, response, next) => {
    try {
        // Bearer <token>
        const auth = request.headers.authorization
        if (!auth) {
            return response.status(401).send({
                message: "Unauthorized"
            })
        }
        const [_, token] = auth.split(" ")  // [Bearer, <token>]
        if (!token) {
            return response.status(401).send({
                message: "Unauthorized"
            })
        }
        const res = jwt.verify(token, process.env.JWT_KEY)
        const currentTime = Math.floor(new Date().getTime() / 1000)
        if (res.exp < currentTime) {
            return response.status(401).send({
                message: "Login expired. Please login again."
            })
        }
        next()
    } catch (err) {
        return response.status(500).send({
            message: "Unauthorized or error happended"
        })
    }
} 

module.exports = {authMiddleware}