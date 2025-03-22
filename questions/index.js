//? Find the maximum product of two integers in an array.
// const array = [1, 2, 3, 4, 5, 6];
// let maxProduct = 0;
// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     let product = array[i] * array[j];
//     if (product > maxProduct) {
//       maxProduct = product;
//     }
//   }
// }
// console.log("Maximum Product:", maxProduct);

//? Reverse an array in place
// const array = [1, 2, 3, 4, 5, 6];
// let start = 0;
// let end =array.length-1;
// while(start<end){
//     let temp = array[start]
//     array[start]= array[end]
//     array[end]= temp;

//     start++
//     end--
// }
// console.log(array, "array");

//? Pending Move all zeroes to the end while maintaining the order of non-zero elements.
// const array = [1, 2, 3, 4, 5, 6, 0,0 ,0 ,0];

// let Obj = {};
// for (let key of array) {
//   console.log(key);
//   Obj[key] = (Obj[key] || 0) + 1;
// }

// console.log(Obj, "Obj");

//? Find the subarray with the given sum.
