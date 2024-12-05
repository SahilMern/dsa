const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergeArry = []

for(let i =0; i<array1.length;i++){
    mergeArry.push(array1[i])
}
for(let i =0; i<array1.length;i++){
    mergeArry.push(array2[i])
}
// console.log(mergeArry, "mergeArry");

//! --------------------------------------------------------------

const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
let array5 = []

for(let i=0; i<array3.length; i++){
    array5[i] = array3[i]
}
for(let i=0; i<array4.length; i++){
    array5[array3.length+i] = array4[i];

}
console.log(array5, "array5 d");

