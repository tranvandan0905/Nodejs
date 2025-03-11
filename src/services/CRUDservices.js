const connection = require("../config/database")
const getALLUser = async () => {
    const [results, fields] = await connection.query('select * from Users')
    return results;
}
const getUpdateIDUser = async (id) => {
    const [results, fields] = await connection.query('select * from Users where id=?', [id])
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}
const postUpdateIDUser = async (id,email,city,name) => {
    const [results, fields] = await connection.query('UPDATE Users SET email = ?,city=? , name=? Where id=?', [email,city,name,id])
}
const getDeleteIDUser = async (id) => {
    const [results, fields] = await connection.query('Delete from Users Where id=?', [id])
}
module.exports = {
    getALLUser, getUpdateIDUser,postUpdateIDUser,getDeleteIDUser
}