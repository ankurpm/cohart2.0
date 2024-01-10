const fs = require('fs');

fs.readFile("mtFile.txt", "utf-8",(err, data) => {
    console.log("File Read complete")
    fs.writeFile("outputFile.txt",data, (err)=>{})
})


