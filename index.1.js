const fs = require('fs');

fs.watch('./data/', function(event, filename){
  
    if (fs.existsSync(`./data/${filename}`)){
        const file = fs.createReadStream(`./data/${filename}`, {encoding : 'utf8'});
        file.on("data", function(data) {
          console.log(JSON.parse(data.toString()));
        });
        console.log('file');
    }

});


// const fileRead = (event, filename) => {
//     const file = fs.createReadStream(`./data/${filename}`, {encoding : 'utf8'});
//     file.on("data", function(res) {
//       return ;
//     });
//     console.log(typeof file);
//     return JSON.stringify(file);
// }

// const fileParse = (name) => {
//     if (typeof name == 'string'){
//         console.log(name);        
//         const parsed = JSON.parse(name);
//         console.log(parsed); 
//     }
//     else console.log('not a string');
           
// }


// const file = fs.createReadStream('./data/products.json', {encoding : 'utf8'});
// file.on("data", function(res) {
//   console.log(res);
// });
// console.log(file);


