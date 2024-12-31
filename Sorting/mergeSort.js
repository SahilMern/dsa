function mergeSortedArrays(arr1, arr2) {
    let result = [];  // This will store the merged array
    let i = 0;        // Pointer for the first array
    let j = 0;        // Pointer for the second array

    // let count =0
    // Traverse both arrays and insert the smaller element into the result
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    console.log(result, "resulut");
    
    // If there are any remaining elements in arr1, push them
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    // If there are any remaining elements in arr2, push them
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// Example usage
let arr1 = [11, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
let mergedArray = mergeSortedArrays(arr1, arr2);

console.log(mergedArray);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
