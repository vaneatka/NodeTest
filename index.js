const fs = require('fs');

fs.watch('./data/', function(event, filename){
    if (fs.existsSync(`./data/${filename}`)){
   fileRead(event, filename);
    } else {
        console.log('file not exist',event,  filename);        
    }
});


const fileRead = (event, filename) => {
    let file = fs.readFileSync(`./data/${filename}`, 'utf8');
    console.log(file);    
    const parsedFile = JSON.parse(file);
    console.log(parsedFile);
    
}