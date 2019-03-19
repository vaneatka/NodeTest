const fs = require('fs');
let dataToShow;
fs.watch('./data/', function(event, filename){
  
    if (fs.existsSync(`./data/${filename}`)){
        const file = fs.createReadStream(`./data/${filename}`, {encoding : 'utf8'});
        file.on("data", function(data) {
          dataToShow = JSON.parse(data.toString());
          if (dataToShow != undefined){
               showData(dataToShow);
            }  
          });              
    }
});

const showData = (data) => {
      const key = Object.keys(data[0])[0];

      data.forEach(element => {
         console.log(element[key]);
          
      });
}