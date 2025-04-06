const array = [4, 8, 9, 8, 5, 3];
let target = 12;

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    // j starts from i+1 to avoid checking the same pair twice
    console.log(array[i], array[j]);

    if (array[i] + array[j] === target) {
      console.log("Matches The target");
      return [array[i], array[j]]; // Returns the pair that matches the target
    }
  }
}

console.log("No matching pairs found.");
