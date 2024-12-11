console.log("Start");
setImmediate(() => {
    console.log("Hello User ");
})
process.nextTick(() => {
    console.log("Hello SET IMMME ");

})
setTimeout(() => {
    console.log("Set Timeout");
    
},0)
console.log("End");