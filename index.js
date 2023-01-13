const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const app = express();
const indexRouter = require("./routes/index.js"); 
//const bodyParser = require('body-parser');
//app.use(bodyParser.json());
app.use(express.json());


app.use("/",indexRouter);

app.listen(3000, () => console.log('API listening on port 3000'));
