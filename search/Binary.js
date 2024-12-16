function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        // Check if target is at the mid index
        if (arr[mid] === target) {
            return mid; // target found at index `mid`
        }

        // If target is greater, ignore the left half
        if (arr[mid] < target) {
            low = mid + 1;
        } 
        // If target is smaller, ignore the right half
        else {
            high = mid - 1;
        }
    }

    // Target not found
    return -1;
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 7;
const result = binarySearch(arr, target);
console.log(result); // Output: 3 (index of 7 in the array)
