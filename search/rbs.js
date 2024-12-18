function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    // Base case: if the search space is invalid, return -1 (element not found)
    if (left > right) {
        return -1;
    }

    // Calculate the middle index
    let mid = Math.floor((left + right) / 2);

    // Check if the target is at the middle
    if (arr[mid] === target) {
        return mid;  // Target found, return the index
    }

    // If target is greater than mid, search the right half
    if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    }

    // If target is less than mid, search the left half
    return binarySearchRecursive(arr, target, left, mid - 1);
}

// Example Usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const result = binarySearchRecursive(arr, target);

if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log("Element not found in the array");
}
