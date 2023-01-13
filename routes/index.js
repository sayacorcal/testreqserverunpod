console.log(process.cwd());

const trainorders = require("../api/trainorders/routes.js");
const generateorders = require("../api/generateorders/routes.js");
const login = require("../api/login/routes.js");


var express = require("express");
var router  = express.Router();

router.use ( "/trainorders",trainorders);
router.use ( "/generateorders",generateorders);
router.use ( "/login",login);

module.exports = router;