const path = require('path');
const express = require('express');
const api = require('./api');
const app = express();
const port = 3000;

app.use('/api', api);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/index.html'));
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
