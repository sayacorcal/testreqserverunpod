const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'home' });
});

app.get('/data', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
