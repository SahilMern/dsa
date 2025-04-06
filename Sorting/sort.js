const array = [80, 32, 54, 100, 644, 944];

for (let i = 0; i < array.length - 1; i++) {  // We don’t need to check the last element
    let minIndex = i;  // Assume the current index has the smallest value

    // Find the index of the minimum value in the unsorted part of the array
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
            minIndex = j;  // Update minIndex if a smaller value is found
        }
    }

    // Swap only if minIndex is different from i to avoid unnecessary swapping
    if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];  // Destructuring swap
    }
}

console.log(array);
