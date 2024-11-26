const {Router} = require('express');
const dataController = require('../controller/dataController');

const router = Router();

router.get("/getdata", dataController.getData);


module.exports = router;