
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

// Replace with your own secret key
const secretKey = 'secretkey';

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

// This route generates a new token
app.get('/login', (req, res) => {
  // Replace with your own user data
  const user = { id: 1, name: 'John' };
  
  // Generate a new token with the user data and secret key
  const token = jwt.sign({ user }, secretKey);

  res.send({ token });
});

app.listen(3000, () => console.log('API listening on port 3000'));
