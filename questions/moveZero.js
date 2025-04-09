const data = [4, 0, 5, 6, 8, 0, 2, 0];
const zeroAtEnd = [];

let zeroCount = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i] === 0) {
    zeroCount++; // Count the zeros
  } else {
    zeroAtEnd.push(data[i]); // Add non-zero elements to zeroAtEnd
  }
}

// After the loop, add the zeros at the end
for (let i = 0; i < zeroCount; i++) {
  zeroAtEnd.push(0); // Push the zeros at the end
}

console.log(zeroAtEnd); // Output: [4, 5, 6, 8, 2, 0, 0, 0]
