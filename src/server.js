require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const connection = require('./config/database')
const webrouter = require('./routes/web')
const APIbrouter = require('./routes/api')
const app = express()
const port = process.env.PORT || 3000
const hosname = process.env.HOST_NAME // tranhs loi post
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
configViewEngine(app);
// khai bao router

app.use('/', webrouter);
app.use('/v1/api', APIbrouter);
//test connection

(async () => {
    try {
        await connection();
    }
    catch (error) {
        console.log(">> error", error)
    }
})()
app.listen(port, hosname, () => {
    console.log(`Example app listening on port ${port}`)
})