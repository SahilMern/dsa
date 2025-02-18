const array = [4,87,8,9,1,0];
for (let i = 0; i < array.length; i++) {
    console.log(i, "array[i]");
    for (let j = 0; j < array.length; j++) {
        if(array[j]>array[j+1]){
            let temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        }
        
    }
}

console.log(array, "Final Arrya");
