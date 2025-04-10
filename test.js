const stack = [];
const max = 5;
let lastValue = stack.length;

const push = (elem) => {
  stack[lastValue] = elem;
  lastValue++;
};

const pop = (elem) => {
  lastValue--;
  stack.length = lastValue;
};

push(25);
push(28);

console.log(stack, "stack");
pop();
console.log(stack, "stack");
