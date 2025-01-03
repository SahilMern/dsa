function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // If divisible, it's not prime
    }
  }
  
  console.log(isPrime(29)); // true
  console.log(isPrime(15)); // false
  