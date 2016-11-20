var fs = require('fs');
fs.readFile('package.json', (err,buffer) => {
  console.log(buffer.toString());
})