// const findMissingNumber = (array) => {
//     let n = array.length + 1;

//     let total = (n * (n + 1)) / 2;
//     console.log(total);
//     let sum = array.reduce((acc, num) => acc + num, 0);
//     return total - sum;

// }
// console.log(findMissingNumber([7,8,9,11]));

const array = [1, 3, 4, 8, 9, 10, 12];
const min = Math.min(...array);
const max = Math.max(...array);
// console.log(min, max);

const missingNumber = [];
for (let i = min; i <= max; i++) {
  const miss = array.includes(i);
  if (!miss) {
    missingNumber.push(i);
  }
}
console.log(missingNumber, "missingNumber"); //[ 2, 5, 6, 7, 11 ] missingNumber
