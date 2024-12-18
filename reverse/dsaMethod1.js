const array = [1, 5, 6, 8, 2];
let start = 0;
let end = array.length - 1;

while (start < end) {
    // Swap elements at start and end
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    console.log(start, end);
    
    // Move the pointers towards the center
    start++;
    end--;
}

console.log(array);  // Output: [2, 8, 6, 5, 1]
