var fs = require('fs');
fs.readdir('.',(err,files) => {
  if(err){
    console.log('Error finding files:'+err);
  }
  else{
    files.forEach((fileName,fileIndex) => {
      fs.readFile(fileName,(err, buffer) => {
        if(err){
          console.log('Error reading file:'+err);
        }
        else{
          console.log(buffer.toString());
        }
      })
    });
  }
})