
const endtrainorder = require("../api/endtrainorder/routes.js");
const trainorders = require("../api/trainorders/routes.js");
const generateorders = require("../api/generateorders/routes.js");
const login = require("../api/login/routes.js");

var express = require("express");
const { route } = require("../api/trainorders/routes.js");
var router  = express.Router();


router.use ( "/endtrainorder",endtrainorder);
router.use ( "/trainorders",trainorders);
router.use ( "/generateorders",generateorders);
router.use ( "/login",login);

router.use ( "/", (req, res)=>{
    return res.status(200).send({ message: 'No Home yet' });
})

module.exports = router;