const fs = require('fs')
const log = console.log.bind(console);
fs.watch('./data/', (event, filename) =>{
    const file = fs.readFileSync(`./data/${filename}`);
    const file_string = file.toString();
    if (file_string.length > 0){
        file_json = JSON.parse(file_string);
        const key = Object.keys(file_json[0])[0];
        log(`Somebody made a ${event} on the ${filename},`);
        file_json.forEach(element => {
            log(element[key]);
        });
        log('--------laaaaag-------------')
    }     
})