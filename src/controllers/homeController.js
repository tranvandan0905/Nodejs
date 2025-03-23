const connection = require('../config/database')
const User = require('../models/user')
const getHomspage = async (req, res) => {
    const results =await User.find({});
    return res.render('home.ejs', { listuser: results })
}
const getCreateuser = (req, res) => {
    return res.render('create.ejs')
}
const postCreateuser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    await User.create({
        email: email,
        name: name,
        city: city
    })

    res.redirect('/')
}
const getedit = async (req, res) => {
    const idUser = req.params.id.trim();
    let results = await User.findById(idUser).exec();
    return res.render('edituser.ejs', { edituser: results })
}
const postUpdateuser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let id = req.body.id;
    await User.updateOne({ _id: id }, { email: email, name: name, city: city });
    res.redirect('/')
}
const getdeleteuser = async (req, res) => {
    const idUser = req.params.id.trim();
    let results = await User.findById(idUser).exec();
    return res.render('delete.ejs', { user: results });
}
const getRemoveUser = async (req, res) => {
    const idUser = req.body.id;
    await User.deleteOne({ _id: idUser });
    res.redirect('/')
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