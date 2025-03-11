require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const { send } = require('process')
const webrouter = require('./routes/web')
const app = express()
const port = process.env.PORT || 3000
const hosname = process.env.HOST_NAME // tranhs loi post
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
configViewEngine(app);
// khai bao router
app.use('/', webrouter);
//test connection
app.listen(port, hosname, () => {
    console.log(`Example app listening on port ${port}`)
})