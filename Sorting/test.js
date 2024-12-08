const data = [1, 15, 1, 55, 88, 1];

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
        if(data[j]>data[j+1]){
            let temp = data[j];
            data[j] = data[j+1]
            data[j+1]=temp
        }               
    }    
}

console.log(data); // This will print the sorted array
