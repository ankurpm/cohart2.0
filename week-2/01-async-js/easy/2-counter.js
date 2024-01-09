
let counter = 0;
function incrementCounter(){
    return counter += 1
}
for(var i=0; i<10; i++){
setTimeout(function(){
    let result = incrementCounter()
    console.log(result)
},1000)
}
