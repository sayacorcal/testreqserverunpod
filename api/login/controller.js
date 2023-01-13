const jwt = require('jsonwebtoken');
const fs = require('fs');

const user = { id : "y1kdgsawl4gyu6k4mn3lb" , name: "sayacorcal"}
// Replace with your own secret key
const secretKey = 'paranguacutirimicuaro';

function addToken(token) {
    let json = JSON.stringify(token);
    // Write the stringified object to the JSON file
    fs.writeFile('tokens.json', json, 'utf8', err => {
        if (err) throw err;
        console.log('Token added successfully');
    });
}

module.exports  = {
    postlogin(req, res){
        // Get the user data from the request headers
        const { email, password } = req.body;
        console.log(email, password )
        //return res.status(400).send({ error: 'Request body is missing' });
        if (!req.body) {
            return res.status(400).send({ error: 'Request body is missing' });
        }
        if(email !== 'sayacorcal@gmail.com' || password !== 'c9n2p6rn8mp99kemvkump' ) {
            // Replace this with your own email and password validation
            return res.status(401).send({ error: 'Invalid email or password' });
        }
        // If the email and password are valid, generate a new token
        // Generate a new token with the user data and secret key
        const token = jwt.sign( {user} , secretKey);
        addToken({ user : "sayacorcal" , token: token})
        res.send({ token });
    }
}
