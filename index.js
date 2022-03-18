const express = require('express');
const app = express();
const port = 8080;

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/main.css', (req, res) => {
  res.sendFile('./main.css', { root: __dirname });
});

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact-me', (req, res) => {
  res.sendFile('./contact-me.html', { root: __dirname });
});

app.use((req, res) => {
  res.sendFile('./404.html', { root: __dirname });
});

app.listen(port, () => {
  console.log('connected');
});
