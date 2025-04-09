const fibonacci = (n) => {
    let a = 0;
    let b = 1;
  
    // Print the first Fibonacci number if n > 0
    if (n > 0) console.log(a); // print 0
    if (n > 1) console.log(b); // print 1
  
    // Now generate the rest of the Fibonacci sequence
    for (let i = 2; i < n; i++) { // Start from i = 2 since 0 and 1 are already printed
      let temp = a + b;
      console.log(temp); // print the next Fibonacci number
      a = b;
      b = temp;
    }
};
  
let n = 10;
fibonacci(n);
