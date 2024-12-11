const ReverseArray = (array, start, end) => {
    console.log(array, "Arar");
    if (start < end) {
        let temp = array[start];        // Store the element at start
        array[start] = array[end];      // Swap the element at start with element at end
        array[end] = temp;              // Place the original start element at the end
        ReverseArray(array, start + 1, end - 1);  // Recursively call with the next indices
    }
};

const data = [4, 1, 5, 9, 8];
ReverseArray(data, 0, data.length - 1);
console.log(data);  // Output the reversed array
