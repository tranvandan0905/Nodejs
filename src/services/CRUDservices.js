const connection = require("../config/database")
const User=require("../models/user")
const getALLUser = async () => {
    const results=User.find({});
    return results;
}

const postUpdateIDUser = async (id,email,city,name) => {
    const [results, fields] = await connection.query('UPDATE Users SET email = ?,city=? , name=? Where id=?', [email,city,name,id])
}
const getDeleteIDUser = async (id) => {
    const [results, fields] = await connection.query('Delete from Users Where id=?', [id])
}
module.exports = {
    getALLUser,postUpdateIDUser,getDeleteIDUser
}