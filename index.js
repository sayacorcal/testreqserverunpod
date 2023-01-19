
// verificar si se esta ejecutando desde google colab
const fs = require('fs');
if (fs.existsSync("/content")) {
    console.log("Running on Google Colab");
    const ngrok = require('ngrok');
    (async function() {
        const token = "2KUCr7NT2p3G8fR5ob97BGH7yNJ_CGQYF8sxvk3NxJDKmPzH"
        await ngrok.authtoken(token);
        const url = await ngrok.connect(3000);
        console.log(url);
    })();

} else {
    console.log("Running on a server or local machine");
}


const express = require('express');
const jwt = require('jsonwebtoken');
//const fs = require('fs');
const app = express();

const indexRouter = require("./routes/index.js"); 

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());


app.use("/",indexRouter);

app.listen(3000, () => console.log('API listening on port 3000'));
