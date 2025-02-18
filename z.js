const array = []
let data = array.length

function push(value){
    array[data] =value
    data++
}
function pop(){
    array.length--
}

push(55);
push(18);
console.log(array, "array");

pop()
console.log(array, "array");
