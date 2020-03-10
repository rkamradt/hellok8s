'use strict';

const request = require('request');

// Constants
const URL = process.env.HELLO_URL;

console.log('testing url ' + URL);
// Main test
request(URL, (err, res, body) => {
  if (err) { console.log('error: ' + err); process.exit(2); }
  if(body === 'Hello World\n') {
    console.log('exit 0; service returned ' + body);
    process.exit(0);
  }
  console.log('exit 1; service returned ' + body);
  process.exit(1);
});
