
const { uploadSingfile } = require('../services/fileServices')
const { createCustomerServices, createArrayCustomerServices, deleteCustomerServices } = require('../services/customerServices');
const Customer = require('../models/customer');

module.exports = {
    postCreateCustomentAPI: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
        let imageCM = "";
        if (!req.files || Object.keys(req.files).length === 0) {

        }
        else {
            let results = await uploadSingfile(req.files.image)
            imageCM = results.path;
        }
        let data = {
            name,
            address,
            phone,
            email,
            imageCM,
            description

        }
        let customer = await createCustomerServices(data);

        return res.status(200).json({
            errorCode: 0,
            data: customer

        })
    },
    postCreateArrayCustomentAPI: async (req, res) => {
        let customer = await createArrayCustomerServices(req.body.customers);

        return res.status(200).json({
            errorCode: 0,
            data: customer

        })
    },
    getALLCustomentAPI: async (req, res) => {
        let results = await Customer.find({});
        return res.status(200).json({
            errorCode: 0,
            data: results

        })
    },
    putCustomentAPI: async (req, res) => {
        let email = req.body.email;
        let name = req.body.name;
        let address = req.body.address;
        let phone = req.body.phone;
        let id = req.body.id;
        let customer = await Customer.updateOne({ _id: id }, { email: email, name: name, address: address, phone: phone });
        return res.status(200).json({
            errorCode: 0,
            data: customer

        })
    },
    deleteCustomentAPI: async (req, res) => {
        let idC = req.body.id;
        console.log(idC);
        let customer = await deleteCustomerServices(idC);
        return res.status(200).json({
            errorCode: 0,
            data: customer

        })
    }

}
