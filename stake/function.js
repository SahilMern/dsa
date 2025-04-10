// Initializing the stack as an array
const stack = [];

function push(element) {
  stack.push(element);
}

// Pop function to remove and return the top element from the stack
function pop() {
  if (isEmpty()) {
    console.log("Stack is empty");
    return;
  }
  return stack.pop();
}

// Peek function to return the top element without removing it
function peek() {
  if (isEmpty()) {
    console.log("Stack is empty");
    return;
  }
  return stack[stack.length - 1];
}

// isEmpty function to check if the stack is empty
function isEmpty() {
  return stack.length === 0;
}

// Size function to return the number of elements in the stack
function size() {
  return stack.length;
}

// Clear function to clear the stack
function clear() {
  stack.length = 0;
  console.log("Stack cleared");
}

// Function calls to demonstrate the stack operations
push(10); // Push 10
push(20); // Push 20
push(30); // Push 30

console.log("Peek: ", peek()); // Peek at the top element (Expected: 30)
console.log("Size: ", size()); // Get the size of the stack (Expected: 3)

console.log("Pop: ", pop()); // Pop the top element (Expected: 30)
console.log("Peek after pop: ", peek()); // Peek at the new top element (Expected: 20)

console.log("Is stack empty? ", isEmpty()); // Check if the stack is empty (Expected: false)

clear(); // Clear the stack
console.log("Is stack empty after clear? ", isEmpty()); // Check if the stack is empty after clearing (Expected: true)
