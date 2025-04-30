const express = require('express');
const app = express();
const PORT = 5005;

app.get('/', (req, res) => {
  res.send('hello world from node js express web server in docker');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});