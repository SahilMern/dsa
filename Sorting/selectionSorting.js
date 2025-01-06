function selectionSort(array) {
    let minid;
    for (let i = 0; i < array.length; i++) {
        minid=i;
        for (let j = i+1; j < array.length; j++) {
            console.log(array[j]<array[minid],array[j],array[minid], "Ky aaa raha ahi dekho " );
            console.log("------------------------------------");
            
            if(array[j]<array[minid]){
                console.log("Hey");
                minid=j
            }
        }
    }
}

const array = [64, 25, 12, 22, 11];

console.log("Sorted Array:", selectionSort(array)); 
