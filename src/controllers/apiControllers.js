const User = require('../models/user')
const { uploadSingfile,uploadMultiplefiles } = require('../services/fileServices')
const getUserAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results

    })
}
const postCreateuserAPI = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    let user = await User.create({
        email: email,
        name: name,
        city: city
    })
    return res.status(200).json({
        errorCode: 0,
        data: user

    })


}
const putUpdateuserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let id = req.body.id;
    let user = await User.updateOne({ _id: id }, { email: email, name: name, city: city });
    return res.status(200).json({
        errorCode: 0,
        data: user

    })
}
const DeleteuserAPI = async (req, res) => {
    const idUser = req.body.id;
    let user = await User.deleteOne({ _id: idUser });
    return res.status(200).json({
        errorCode: 0,
        data: user

    })
}
const upfileAPI = async (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
    }
    let results = await uploadSingfile(req.files.image)
    return res.status(200);
}
const upfilesAPI = async (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
    }
    if(Array.isArray(req.files.image))
    {
        let results = await uploadMultiplefiles(req.files.image)
        return res.status(200).json({
            EC:0,
            data: results
        })

    }
    else{
        return await upfileAPI(req,res);
    }
   
}
module.exports =
{
    getUserAPI, postCreateuserAPI, putUpdateuserAPI, DeleteuserAPI,upfilesAPI,
    upfileAPI
}