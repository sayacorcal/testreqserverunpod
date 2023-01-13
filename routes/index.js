const { exec } = require('child_process');
exec('ls ', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

const trainorders = require("../api/trainorders/routes.js");
const generateorders = require("../api/generateorders/routes.js");
const login = require("../api/login/routes.js");

var express = require("express");
var router  = express.Router();

router.use ( "/trainorders",trainorders);
router.use ( "/generateorders",generateorders);
router.use ( "/login",login);

module.exports = router;