function calculateMultiple(number) {
    switch(number) {
        case 1:
            return 1 * 1;
        case 2:
            return 2 * 2;
        case 3:
            return 3 * 3;
        case 4:
            return 4 * 4;
        case 5:
            return 5 * 5;
        default:
            return "Invalid number!";
    }
}

// Example usage
let result = calculateMultiple(4);
console.log(result);  // Output: 16


