function bubbleSort(arr) {
  let n = arr.length;
  let count = 0;
  // Outer loop to go through the entire array
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      console.log(arr[j]);
    }

    // Inner loop to compare adjacent elements
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare adjacent elements and swap if they are in wrong order
      if (arr[j] > arr[j + 1]) {
        // Swap elements manually without using push/pop
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage:
const data = [1, 15, 1, 55, 88];
console.log("Sorted Array:", bubbleSort(data)); // Output: [1, 1, 15, 55, 88]
