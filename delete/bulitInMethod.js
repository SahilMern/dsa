// Delete an element from an array using the filter method
const numbersArray = [1, 2, 5, 9, 8]; // Initial array
const filteredArray = numbersArray.filter((item) => {
    return item !== 2; // TODO: Remove the element '2' from the array
});
console.log(filteredArray); // Output: [1, 5, 9, 8]

// Delete elements from an array using the splice method
const numbersArray1 = [1, 2, 5, 9, 8]; // Initial array
const removedElements = numbersArray1.splice(2, 2); // TODO: Remove 2 elements starting from index 2
console.log(removedElements); // Output: [5, 9] (elements removed)

// Remove the first element from an array using shift method
let numberArray2 = [1, 2, 3, 4, 5]; // Initial array
numberArray2.shift(); // TODO: Remove the first element from the array
console.log(numberArray2); // Output: [2, 3, 4, 5]

// Remove the last element from an array using pop method
numberArray2.pop(); // TODO: Remove the last element from the array
console.log(numberArray2); // Output: [2, 3, 4]


// Remove the last element manually (like pop)
let numberArray3 = [2, 3, 4, 5]; // Initial array

// Simulate popping by reducing the length of the array (removing last element)
numberArray3.length = numberArray3.length - 1;

console.log(numberArray3); // Output: [2, 3, 4]
