function findMissingNumber(arr, n) {
    // Calculate the expected sum of numbers from 1 to n
    const expectedSum = (n * (n + 1)) / 2;
    
    // Calculate the sum of elements in the array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    // The missing number is the difference between the expected and actual sums
    return expectedSum - actualSum;
}

// Example usage:
const arr = [1,2,6,3,7,9]; // Missing number is 5
const n = 7; // Array is from 1 to 8

console.log(findMissingNumber(arr, n)); // Output: 5


