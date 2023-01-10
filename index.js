const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const app = express();

//const bodyParser = require('body-parser');
//app.use(bodyParser.json());
const ex = require('express');
app.use(ex.json());

// Replace with your own secret key
const secretKey = 'paranguacutirimicuaro';
const user = { id : "y1kdgsawl4gyu6k4mn3lb" , name: "sayacorcal"}

function addToken(token) {
    let json = JSON.stringify(token);
    // Write the stringified object to the JSON file
    fs.writeFile('tokens.json', json, 'utf8', err => {
        if (err) throw err;
        console.log('Token added successfully');
    });
}

function gettoken(){
    // Open the JSON file
    fs.readFile('tokens.json', (err, data) => {
        if (err) throw err;
        // Parse the JSON file to an object
        let tokens = JSON.parse(data);
        return tokens     
    });
}

// This route is protected and requires a valid token to access it
app.get('/protected', (req, res) => {
  // Get the token from the request headers
  const token = req.headers['authorization'];
  console.log(token.split(" "))
  // If there is no token, return a 401 unauthorized error
  if (!token) {
    return res.status(401).send({ error: 'No token provided' });
  }
  // Verify the token and decode the payload
  jwt.verify(token.split(" ")[1], secretKey, (err, decoded) => {
    if (err) {
      console.log(err)
      return res.status(401).send({ error: 'Invalid token' });
    }    
    // If the token is valid, send a response with the user's data
    res.send({ user: decoded.user });
  });
});

// This route generates a new token
app.get('/login', (req, res) => {
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
    const token = jwt.sign( user , secretKey);
    addToken({ user : "sayacorcal" , token: token})
    res.send({ token }); 
});

app.listen(3000, () => console.log('API listening on port 3000'));
