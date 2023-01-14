const express = require('express');
const app = express();
const indexRouter = require("./routes/index.js");

app.use(express.json());
app.use("/",indexRouter);
app.listen(3000, () => console.log('API listening on port 3000'));