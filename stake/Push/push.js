// stake/Push/push.js
const data = [];
let max = 5;
let lastValue = data.length;

const push = (value) => {
  if (lastValue >= max) {
    console.log("Stake is full");
  } else {
    data[lastValue] = value;  // Add value at the correct position
    lastValue++;               // Increment lastValue to track the next index
    console.log(data);
  }
};

const pop = () => {
  if (lastValue > 0) {
    lastValue--;  
    data.length= lastValue        // Decrease lastValue to "remove" the last element
    console.log(data, "s");
  } else {
    console.log("No items to pop");
  }
};

push(20);  // Adds 20
push(20);  // Adds another 20
push(20);  // Adds another 20
push(20);  // Adds another 20
push(20);  // Adds another 20
push(20);  // Stake is full, won't add

pop();     // Removes last element
pop();     // Removes another element
