const project = require('../models/project')
const { createproject, deleteproject } = require('../services/projectServices')
module.exports = {
    getAllProject: async (req, res) => {
        const listpro = await project.find({});
        return res.status(200).json({
            errorCode: 0,
            data: listpro

        })
    },
    postprojectAPI: async (req, res) => {
        const results = await createproject(req.body);
        return res.status(200).json({
            errorCode: 0,
            data: results

        })
    },
    deleteprojectAPI: async (req, res) => {
        const results = await deleteproject(req.body);
        return res.status(200).json({
            errorCode: 0,
            data: results

        })
    }


}