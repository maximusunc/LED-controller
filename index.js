const path = require('path');
const express = require('express');
const api = require('./api');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/index.html'));
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
