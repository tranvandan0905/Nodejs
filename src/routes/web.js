const express = require("express");
const { getedit, getHomspage, postCreateuser,getCreateuser,postUpdateuser,getdeleteuser,getRemoveUser} = require("../controllers/homeController")
const router = express.Router();
router.get('/', getHomspage);
router.get('/edit:id', getedit);
router.get('/create', getCreateuser);
router.post('/create-user', postCreateuser);
router.post('/Update-user', postUpdateuser);
router.get('/delete:id',getdeleteuser);
router.post('/delete-user',getRemoveUser);

module.exports = router;