const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

// jwt -> json web token
// authentication -> verifying the user
// authorization -> accessing the resources

// 3 parts of jwt
    // 1. header -> algorithm, type, key, meta data
    // 2. payload -> data of the user
    // 3. signature -> verify the payload

let usersList = []

const signup = async (request, response) => {
    try {
        const userData = request.body
        if (!userData?.email) {
            return response.status(400).send({
                message: "Email is required"
            })
        }
        if(!userData.username) {
            return response.status(400).send({
                message: "Username is required"
            })
        }
        if(!userData.password) {
            return response.status(400).send({
                message: "Password is required"
            })
        }
        const index = usersList.findIndex(user => user.email == userData.email || user.username == userData.username)
        if (index > -1) {
            return response.status(409).send({
                message: "User already exists"
            })
        }
        userData.password = await bcrypt.hash(userData.password, 10)
        usersList.push(userData)
        return response.status(201).send(userData)
    } catch (error) {
        return response.status(500).send({
            message: error.message || "Some error occurred while creating the User."
        })  
    }
}

const login = async (request, response) => {
    try {
        const { username, password } = request.query
        if (!username) {
            return response.status(400).send({
                message: "Username is required"
            })
        }
        if(!password) {
            return response.status(400).send({
                message: "Password is required"
            })
        }
        const user = usersList.find(u => u.username == username)
        if (!user) {
            return response.status(404).send({
                message: "User not found"
            })
        }
        const is_valid = await bcrypt.compare(password, user.password)
        if (!is_valid) {
            return response.status(401).send({ // Unauthorized
                message: "Invalid credentials"
            })
        }
        user.password = undefined
        const token = jwt.sign({ sub: user }, process.env.JWT_KEY, { expiresIn: "3d"})
        return response.status(200).send(token)
    } catch (error) {
        console.log(error);
        return response.status(500).send({
            message: error.message || "Some error occurred while creating the User."
        })   
    }
}

const access = async (request, response) => {
    return response.status(200).send("Access granted")
}

module.exports = {
    signup, login, access
}

// mongodb -> MongoDB is an open-source document-oriented database that is designed to store a large scale of data and allows us to work with that data efficiently

// features

// 1. Schema-less Database
// 2. Document Oriented
// 3. Indexing
// 4. Scalability
// 5. Aggregation
// 6. High Performance

// Limited Document Size – Maximum 16MB per document
// Nesting Limits – Supports up to 100 levels of nested documents
// High Memory Usage – Requires additional storage