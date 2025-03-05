// Find the largest number, ,in an array.
const array = [1,8,9,5,25,55,96]
// console.log(Math.max(...array));

let largestNumber = array[0]
for (let i = 0; i < array.length; i++) {
   if (largestNumber<array[i]) {
    console.log("hey");
    largestNumber= array[i]
   }
    
}

console.log(largestNumber, "largestNumber");

