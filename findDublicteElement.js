const array = [44, 55, 66, 66, 88, 88,200];

let duplicateElements = [];

// Loop through the array
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

    // Check if the element is already in the duplicateElements array
    if (duplicateElements.includes(array[i])) {
        console.log("Duplicate found: ", array[i]);
    } else {
        // If it's not a duplicate, check if it occurs again later
        console.log(array.indexOf(array[i]), i , i + 1);
        
        if (array.indexOf(array[i], i + 1) !== -1) {
            // If found later, add it to the duplicateElements array
            duplicateElements.push(array[i]);
        }
    }
}

console.log(duplicateElements, "duplicateElements");
