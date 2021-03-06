const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/build', 'index.html'));
});

app.listen(port, '0.0.0.0');
console.log('Listening => ' + port)