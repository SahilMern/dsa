function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Return index if element is found
      }
    }
    return -1; // Return -1 if element is not found
  }
  
  const arr = [10, 20, 30, 40, 50];
  const target = 30;
  const index = linearSearch(arr, target);
  console.log(index);  // Output: 2 (index of 30)
  