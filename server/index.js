const express = require('express');
const Port = 9001;
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/../client/')));

app.get(['/', 'p/*'], (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.listen(Port, () => {
  console.log(`listening on port ${Port}`)
});