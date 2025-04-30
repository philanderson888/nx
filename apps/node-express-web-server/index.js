const express = require('express');
const app = express();
const PORT = 5002;

app.get('/', (req, res) => {
  res.send('hello world from node js express web server');
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});