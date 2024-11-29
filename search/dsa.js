const arr = [1, 2, 3, 4, 5];
let found = false;
let value = 4;
for(let i =0; i<arr.length; i++){
    if(arr[i]===value){
        console.log("found", i);
        found = true
        break;
    }
}
