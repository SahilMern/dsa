const array = [44, 55, 66, 66, 88, 200];

let duplicateElements = [];

// Loop through the array
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

    // Check if the element is already in the duplicateElements array
    if (duplicateElements.includes(array[i])) {
        console.log("Duplicate found: ", array[i]);
    } else {
        // If it's not a duplicate, check if it occurs again later
        if (array.indexOf(array[i], i + 1) !== -1) {
            // If found later, add it to the duplicateElements array
            duplicateElements.push(array[i]);
        }
    }
}

console.log(duplicateElements, "duplicateElements");

// --------------------------------------------------

// const array = [44, 55, 66, 66, 88, 88, 200];

// Convert to a Set to remove duplicates
const data = new Set([...array]);

// Convert Set back to an array
const uniqueArray = Array.from(data);

console.log(uniqueArray, "Unique Array");