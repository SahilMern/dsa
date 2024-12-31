function fibonacci(n) {
    let fib = [0, 1]; // Starting values for the Fibonacci sequence
    
    // Generate the Fibonacci sequence up to the nth number
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    return fib.slice(0, n); // Return the Fibonacci sequence up to n elements
  }
  
  // Example usage:
  let n = 10; // Get the first 10 Fibonacci numbers
  console.log(fibonacci(n)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  