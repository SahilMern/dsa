function binarySearch(arr, target) {
    let left = 0;  // Start index of the array
    let right = arr.length - 1;  // End index of the array
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);  // Middle index
        
        // Check if the target is at the middle
        if (arr[mid] === target) {
            return mid;  // Target found, return index
        }
        
        // If target is greater, ignore the left half
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // If target is smaller, ignore the right half
        else {
            right = mid - 1;
        }
    }
    
    return -1;  // Target not found
}

// Example Usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const result = binarySearch(arr, target);

if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log("Element not found in the array");
}
