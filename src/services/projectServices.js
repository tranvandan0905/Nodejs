const Project = require('../models/project');
const mongoose = require("mongoose");
module.exports = {
    createproject: async (data) => {
        if (data.type === "EMPTY-PROJECT") {
            let results = await Project.create(data);
            return results;
        }
        if (data.type === "ADD-USER") {
            let pro = await Project.findById(data.projectId).exec();

            for (let i = 0; i < data.usersArr.length; i++) {
                let userId = data.usersArr[i];

                // Kiểm tra nếu userId không phải là ObjectId hợp lệ thì chuyển đổi
                if (!mongoose.Types.ObjectId.isValid(userId)) {
                    console.error(`Invalid ObjectId: ${userId}`);
                    continue; // Bỏ qua giá trị không hợp lệ
                }

                pro.usersInfor.push(new mongoose.Types.ObjectId(userId));
            }

            console.log(data.usersArr);
            let newresult = await pro.save();
            return newresult;
        }
    },
    deleteproject: async (data) => {

        let pro = await Project.findById(data.projectId).exec();
        pro.usersInfor.pull(data.usersArr);
        let newresult = await pro.save();
        return newresult;
    }

}