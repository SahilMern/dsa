// function fibonacci(n) {
//     let fib = [0, 1]; // Starting values for the Fibonacci sequence

//     // Generate the Fibonacci sequence up to the nth number
//     for (let i = 2; i <= n; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2];
//     }

//     return fib.slice(0, n); // Return the Fibonacci sequence up to n elements
//   }

//   // Example usage:
//   let n = 10; // Get the first 10 Fibonacci numbers
//   console.log(fibonacci(n)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//Fibonacic second best method
const fibonacci = (n) => {
  let a = 0;
  let b = 1;

  // Print the first Fibonacci number if n > 0
  if (n > 0) console.log(a); // print 0
  if (n > 1) console.log(b); // print 1

  // Now generate the rest of the Fibonacci sequence
  for (let i = 0; i < n; i++) {
    let temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
  }
};

let n = 10;
fibonacci(n);
