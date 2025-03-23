const Customer = require("../models/customer");
const createCustomerServices = async (data) => {

    try {
        let results = await Customer.create({
            name: data.name,
            address: data.address,
            phone: data.phone,
            email: data.email,
            image: data.imageCM,
            description: data.description,


        })
        return results;



    } catch (error) {
        console.log(error);
        return null;
    }
}
const createArrayCustomerServices = async (arr) => {
    try {
        let results = await Customer.insertMany(arr);
        return results;
    } catch (error) {

        return error;
    }
}
const deleteCustomerServices = async (id) => {
    try {
        let results = await Customer.deleteById({ _id: id });
        return results;
    } catch (error) {

        return error;

    }
}
module.exports = {
    createCustomerServices, createArrayCustomerServices, deleteCustomerServices
}