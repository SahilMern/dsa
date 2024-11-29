let numberOfArray1 = [1, 5, 12, 16];
let numberOfArray2 = [1, 5, 12, 16];
let numberOfArray3 = [...numberOfArray1, ...numberOfArray2];
console.log(numberOfArray3, "spread operater");

let conactArray = numberOfArray1.concat(numberOfArray2);
console.log(conactArray, "conactArray");

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
array1.push(...array2);
// console.log(array1); // [1, 2, 3, 4, 5, 6]

Array.prototype.push.apply(array1, array2);

console.log(array1); // [1, 2, 3, 4, 5, 6]
