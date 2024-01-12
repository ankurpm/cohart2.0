const fs = require('fs');

let arr = fs.readFile("spacedFile.txt", "utf-8",(err, data) => {
    console.log(data.split(/\s+/).join(' '))
});



