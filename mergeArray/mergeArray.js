let numberOfArray1 = [1, 5, 12, 16];
let numberOfArray2 = [1, 5, 12, 16];
let numberOfArray3 = [];

// Copy elements from numberOfArray1 into numberOfArray3
for (let i = 0; i < numberOfArray1.length; i++) {
    numberOfArray3[i] = numberOfArray1[i];
}

// Add elements from numberOfArray2 into numberOfArray3 and log them
for (let i = 0; i < numberOfArray2.length; i++) {
    numberOfArray3.push(numberOfArray2[i]); // Add elements to the array
    console.log(numberOfArray3[numberOfArray1.length + i]); // Log the newly added element
}

console.log(numberOfArray3); // Final merged array
