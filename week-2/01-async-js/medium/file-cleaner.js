const fs = require('fs');

fs.readFile("spacedFile.txt", "utf-8", (err, data) => {
    var temp = ''
    var tempArr = []
    for (var i = 0; i < data.length; i++) {
        if (data[i] != ' ') {
            temp = temp + data[i]
        } else {
            if (temp != '') {
                tempArr.push(temp)
            }
            temp = ''
        }
    }
    var finalString = ''

    for (var i = 0; i < tempArr.length; i++) {
        if (i === 0) {
            finalString = finalString + tempArr[i]
        } else {
            finalString = finalString + ' ' + tempArr[i]
        }
    }
    fs.writeFile('finecleaneroutput.txt', finalString, (err) => { })
});



