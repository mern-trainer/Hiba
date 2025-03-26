const UserModel = require("../Models/users.model");

const getInfo = async (request, response) => {
    try {
        const res = await UserModel.aggregate([
            {
                $lookup: {
                    from: "orders",
                    localField: "id",
                    foreignField: "UserID",
                    as: "orders"
                }
            }
        ])
        return response.status(200).send(res)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getInfo }