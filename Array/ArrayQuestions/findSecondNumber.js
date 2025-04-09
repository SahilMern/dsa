const array = [44, 88, 78, 707, 25, 13, 90];

let bigNumber = array[0]; // Initialize with the first element
let secondLargestNumber = undefined; // Initially undefined

for (let i = 1; i < array.length; i++) {
  if (array[i] > bigNumber) {
    secondLargestNumber = bigNumber; // Update secondLargestNumber to the old bigNumber
    bigNumber = array[i]; // Update bigNumber to the new largest number
  } else if (array[i] > secondLargestNumber && array[i] !== bigNumber) {
    secondLargestNumber = array[i]; // Update secondLargestNumber
  }
}

console.log("Biggest number:", bigNumber); // Output: 707
console.log("Second largest number:", secondLargestNumber); // Output: 90
