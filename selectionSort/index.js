function selectionSort(arr) {
    let n = arr.length;
    
    // One by one move the boundary of the unsorted subarray
    for (let i = 0; i < n - 1; i++) {
      // Find the minimum element in the unsorted portion
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
          console.log(minIndex, "minIndex");
           // Update minIndex if a smaller element is found
        }
      }
  
      
      // Swap the found minimum element with the first element
      if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }

    }
    return arr;
  }
  
  // Example usage:
  let array = [64, 25, 12,2, 22, 11];
  console.log("Sorted array:", selectionSort(array));
  