const { connect } = require("mongoose");
require("dotenv").config();

const databaseConnection = async () => {
    try {
        const response = await connect(process.env.MONGODB_CONNECTION_STRING, {
            dbName: process.env.MONGODB_DATABASE_NAME
        })
        console.log(response.connection.db.databaseName, "Connected");
    } catch (error) {
        console.log(error);   
    }
}

module.exports = databaseConnection