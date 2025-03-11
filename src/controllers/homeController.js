const connection = require('../config/database')
const { getALLUser, getUpdateIDUser, postUpdateIDUser, getDeleteIDUser } = require('../services/CRUDservices')
const getHomspage = async (req, res) => {
    let results = await getALLUser() // await la chay dong nay ms chay dong sau
    return res.render('home.ejs', { listuser: results })
}
const getCreateuser = (req, res) => {
    return res.render('create.ejs')
}
const postCreateuser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let [results, sields] = await connection.query(
        ` INSERT INTO Users (email,name,city)VALUES (?, ?, ?) `, [email, name, city])


}
const getedit = async (req, res) => {
    const idUser = req.params.id;
    let results = await getUpdateIDUser(idUser);
    return res.render('edituser.ejs', { edituser: results })
}
const postUpdateuser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let id = req.body.id;
    postUpdateIDUser(id, email, city, name)
    res.redirect('/')
}
const getdeleteuser = async (req, res) => {
    const idUser = req.params.id;
    let results = await getUpdateIDUser(idUser);
    return res.render('delete.ejs', { user: results });
}
const getRemoveUser = async (req, res) => {
    const idUser = req.body.id;
    await getDeleteIDUser(idUser);
    console.log('ok',idUser)
    // res.redirect('/')
}
module.exports = {
    getHomspage,
    getCreateuser,
    postCreateuser,
    postUpdateuser,
    getdeleteuser,
    getRemoveUser,
    getedit
}