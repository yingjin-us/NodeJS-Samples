var fs = require('fs');
fs.createReadStream('server.js').pipe(fs.createWriteStream('out.js'));