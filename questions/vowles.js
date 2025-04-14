let array = ["a", "i", "e", "o", "u"];
let string = "sahilyadav";

let vowelsCount = 0;
let vowlesWordList = [];

for (let i = 0; i < string.length; i++) {
  if (array.includes(string[i])) {
    // console.log("truee");
    vowlesWordList.push(string[i]);
    vowelsCount++;
  } else {
    console.log("not");
  }
}
console.log(vowelsCount, vowlesWordList);


// Write a function to flatten a nested array.
// Implement a debounce function.
