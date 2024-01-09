const fs = require('fs');
 
const file=(filepath)=>{
  fs.readFile('filepath', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
}
  

 const firing=()=>{
  let a=0;
  for(let i=0;i<1000;i++){
    a++;
  }
 }

 file(path);
 firing();