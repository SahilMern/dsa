//!Note:-  Second Method best Method
const array = [44, 55, 66, 66, 88, 88, 200];
console.log(Math.max(...array));
console.log(Math.min(...array));

let maxValue = array[0];
for (let i = 0; i < array.length; i++) {
  if (array[i] > maxValue) {
    maxValue = array[i];
  }
}

console.log(maxValue, "Final Maximum value in array");


//!Note:- Same logic for find min value also