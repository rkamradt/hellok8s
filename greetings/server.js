'use strict';

const express = require('express');
const request = require('request');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const URL = process.env.HELLO_URL;

// App
const app = express();
app.get('/', (req, resp) => {
  request(URL, (err, res, body) => {
    if (err) { return resp.status(502).send('Hello World did not respond'); }
    resp.send(body.replace('\n','') + ', how are you\n');
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
