const fs = require('fs');

fs.readFile("mtFile.txt", "utf-8",(err, data) => {
    console.log(data)
})

for(var i=0; i<100; i++){
    setTimeout(() =>{
        console.log(i)
    }, 50)
}