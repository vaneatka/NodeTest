const fs = require('fs');

fs.watch('./data/', function(event, filename){
    if (fs.existsSync(`./data/${filename}`)){
   fileParse(fileRead(event, filename) );
    } else {
        console.log('file not exist',event,  filename);        
    }
});


const fileRead = (event, filename) => {
    let file = fs.readFileSync(`./data/${filename}`, 'utf8');
    console.log(typeof file);    
    console.log('succes', filename);
    console.log('----------');
    return file;       
}

const fileParse = (name) => {
    if (typeof name == 'string'){
        console.log(name);        
        const parsed = JSON.parse(name);
        console.log(parsed); 
    }
    else console.log('not a string');
           
}

