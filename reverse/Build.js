const array = [1, 5, 6, 8, 2];
const reversedArray = [];

array.forEach(item => reversedArray.unshift(item));

console.log(reversedArray);  // Output: [2, 8, 6, 5, 1]
