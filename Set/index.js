// Creating a Set
let numbers = new Set([1, 2, 3, 4, 5]);

// Adding values
numbers.add(6);  // Adds 6
numbers.add(3);  // 3 will be ignored, as it's already in the set

console.log(numbers);  // Set { 1, 2, 3, 4, 5, 6 }

// Checking the size of the Set
console.log(numbers.size);  // 6

// Deleting a value
numbers.delete(2);  // Removes 2
console.log(numbers);  // Set { 1, 3, 4, 5, 6 }

// Checking if a value exists in the Set
console.log(numbers.has(3));  // true
console.log(numbers.has(2));  // false

// Iterating over a Set
for (let number of numbers) {
    console.log(number);  // Logs 1, 3, 4, 5, 6
}
