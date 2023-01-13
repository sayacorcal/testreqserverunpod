const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const app = express();
/*
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
*/
const indexRouter = require("./routes/index.js"); 

//const bodyParser = require('body-parser');
//app.use(bodyParser.json());
app.use(express.json());


app.use("/",indexRouter);

app.listen(3000, () => console.log('API listening on port 3000'));
