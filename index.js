
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

// Replace with your own secret key
const secretKey = 'paranguacutirimicuaro';
const user = { id : "y1kdgsawl4gyu6k4mn3lb" , name: "sayacorcal"}

const fs = require('fs');

function addToken(token) {
  // Open the JSON file
  fs.readFile('tokens.json', (err, data) => {
    if (err) throw err;

    // Parse the JSON file to an object
    let tokens = JSON.parse(data);

    // Add the new token to the object
    tokens.push(token);

    // Stringify the object
    let json = JSON.stringify(tokens);

    // Write the stringified object to the JSON file
    fs.writeFile('tokens.json', json, 'utf8', err => {
      if (err) throw err;
      console.log('Token added successfully');
    });
  });
}

// This route is protected and requires a valid token to access it
app.get('/protected', (req, res) => {
  // Get the token from the request headers
  const token = req.headers['authorization'];
  
  // If there is no token, return a 401 unauthorized error
  if (!token) {
    return res.status(401).send({ error: 'No token provided' });
  }

  // Verify the token and decode the payload
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: 'Invalid token' });
    }
    
    // If the token is valid, send a response with the user's data
    res.send({ user: decoded.user });
  });
});

app.get('/', (req, res) => {
    res.send({ message: "hello" });
})
// This route generates a new token
app.get('/login', (req, res) => {
    // Get the user data from the request headers
    
    //const { email, password } = req.body;
    console.log(req.body)

    return res.status(400).send({ error: 'Request body is missing' });
    if (!req.body) {
        return res.status(400).send({ error: 'Request body is missing' });
    }

    if(email !== 'sayacorcal@gmail.com' || password !== 'c9n2p6rn8mp99kemvkump' ) {
        // Replace this with your own email and password validation
        return res.status(401).send({ error: 'Invalid email or password' });
    }
    
    // If the email and password are valid, generate a new token
    // Generate a new token with the user data and secret key
    const token = jwt.sign({ user }, secretKey);
    
    addToken({ id : "sayacorcal" , name: token})

    res.send({ token });

});

app.listen(3000, () => console.log('API listening on port 3000'));
