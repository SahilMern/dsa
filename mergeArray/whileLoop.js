function mergeArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  // Use while loop to merge elements
  while (i < arr1.length || j < arr2.length) {
    if (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
      console.log("--", i);
    }
    if (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
      console.log("------", j);
    }
  }

  return mergedArray;
}

// Example usage:
const array1 = [1, 2, 3, 4,5,6,7,8];
const array2 = ["a", "b", "c"];
const merged = mergeArrays(array1, array2);

console.log(merged); // Output: [1, 'a', 2, 'b', 3, 'c']
