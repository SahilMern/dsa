function selectionSort(array) {
    let minid;
    for (let i = 0; i < array.length; i++) {
        minid=i;
        console.log(minid);
        
        for (let j = i+1; j < array.length; j++) {
            console.log(array[minid], "j");
            
            if (array[j] < array[minid]) {
                minid = j; 
            }
        }
        if (minid !== i) {
            let temp = array[i];
            array[i] = array[minid];
            array[minid] = temp;
        }
    }
    return array;
}

const array = [64, 25, 12, 22, 11];

console.log("Sorted Array:", selectionSort(array)); 
