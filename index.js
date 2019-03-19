const fs = require('fs');
let dataToShow;
fs.watch('./data/', function(event, filename){
  
    if (fs.existsSync(`./data/${filename}`)){
        const file = fs.createReadStream(`./data/${filename}`, {encoding : 'utf8'});
        file.on("data", function(data) {
          dataToShow = JSON.parse(data.toString());
          if (dataToShow != undefined){
               showData(dataToShow, event, filename);
            }  
          });              
    }
});

const showData = (data, event, filename) => {
      const key = Object.keys(data[0])[0];
        console.log(`Someone made a ${event}, on ${filename}`,);
        console.log(`The ${key} positions are:`);        
        
      data.forEach(element => {
         console.log(element[key]);          
      });

      console.log('++++++++++++++++++++++');      
}