const bcrypt = require("bcrypt")

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
        return response.status(200).send(userData)
    } catch (error) {
        return response.status(500).send({
            message: error.message || "Some error occurred while creating the User."
        })  
    }
}

const login = async (request, response) => {
    try {
        const { email, password } = request.query
        if (!email) {
            return response.status(400).send({
                message: "Email is required"
            })
        }
        if(!password) {
            return response.status(400).send({
                message: "Password is required"
            })
        }
        const user = usersList.find(u => u.email == email)
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
        return response.status(200).send(user)
    } catch (error) {
        return response.status(500).send({
            message: error.message || "Some error occurred while creating the User."
        })   
    }
}

module.exports = {
    signup, login
}