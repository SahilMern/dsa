// Merge two sorted arrays.
const array1 = [44, 55, 66, 88, 200];
const array2 = [44, 55, 66, 88, 200];
const array3 = [...array1, ...array2];

let mergerArray = [];

for (let i = 0; i < array1.length; i++) {
  mergerArray[i] = array1[i];
}
for (let j = 0; j < array2.length; j++) {
  mergerArray[mergerArray.length] = array2[j];
}

console.log(mergerArray);
