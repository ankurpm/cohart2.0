function showSystemTime(timefunction) {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    timefunction(h, m, s)
}

function show24hrTime(h, m, s) {
    setInterval(function () {
        s = parseInt(s)
        m = parseInt(m)
        h = parseInt(h)

        s += 1
        if (s === 60) {
            m += 1
            s = 0
        }
        if (m === 60) {
            h += 1
            m = 0
            s = 0
        }
        if (h === 24) {
            h = 0
            m = 0
            s = 0
        }
        if (s < 10) {
            s = '0' + s
        }
        if(m < 10){
            m = '0'+ m
        }
        if(h < 10){
            h = '0' + h
        }
        console.log(h + ':' + m + '::' + s)
    }, 1000)
}

showSystemTime(show24hrTime)


