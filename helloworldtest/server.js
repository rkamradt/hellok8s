'use strict';

const request = require('request');

// Constants
const URL = process.env.HELLO_URL;

// Main test
request(URL, (err, res, body) => {
  if (err) { console.log('error'); process.exit(2); }
  if(body === 'Hello world\n') {
    console.log('service returned ' + body);
    process.exit(0);
  }
  console.log('service returned ' + body);
  process.exit(1);
});
