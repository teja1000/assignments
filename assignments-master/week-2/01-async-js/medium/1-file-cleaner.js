const fs = require('fs');
 
const cleaner=(filepath)=>{
  fs.readFile('filepath', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let a=data.trim()
    fs.writeFile(filepath,a,(err)=>{
      if(error){
        console.log("error");
      }else{
        console.log("successfully written");
      }
    });
    });
};
  