const path = require('path');
const uploadSingfile = async (fileObject) => {
    // if (!fileObject) {
    //     return { status: 'failed', path: null, error: 'File is undefined' };
    // }
    const uploadDir = path.join(__dirname, '../public/images');
    let extName = path.extname(fileObject.name);
    let baseName = path.basename(fileObject.name, extName);
    let finalName = `${baseName}-${Date.now()}${extName}`;
    let finalpath = `${uploadDir}/${finalName}`;
    try {
        await fileObject.mv(finalpath);
        return {
            status: 'success',
            path: finalName,
            error: null
        };
    } catch (error) {
        console.log(error);
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(error)
        };
    }
};
const uploadMultiplefiles = async (filesArr) => {
    const uploadDir = path.join(__dirname, '../public/images');
    let resultArr = [];
    let countSuccess = 0;
    for (let i = 0; i < filesArr.length; i++) {
        let extName = path.extname(filesArr[i].name);
        let baseName = path.basename(filesArr[i].name, extName);
        let finalName = `${baseName}-${Date.now()}${extName}`;
        let finalpath = `${uploadDir}/${finalName}`;
        try {
            await filesArr[i].mv(finalpath);
            resultArr.push({
                status: 'success',
                path: finalName,
                fileName: filesArr[i].name,
                error: null
            });
            countSuccess++;
        } catch (error) {
            resultArr.push({
                status: 'failed',
                path: null,
                fileName: filesArr[i].name,
                error: JSON.stringify(error)
            });
        }
    }
    return {
        countSuccess: countSuccess,
        detail: resultArr
    }

}
module.exports = { uploadSingfile, uploadMultiplefiles };