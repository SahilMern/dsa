// function isPrime(num) {
//     if (num <= 1) return false;
//     console.log(Math.sqrt(num), "Math.sqrt(num)");

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false; // If divisible, it's not prime
//     }

//   }

//   console.log(isPrime(29)); // true
//   console.log(isPrime(4)); // false

function isPrime(num) {
  console.log(num, "num");

  if (num <= 1) { // Numbers less than or equal to 1 are not prime
    console.log("Value must be greater than 1 to be prime");
    return false;
  }

  if (num === 2) { // 2 is the only even prime number
    console.log("2 is a prime number");
    return true;
  }

  if (num % 2 === 0) { // Even numbers greater than 2 are not prime
    console.log("Even number greater than 2, not prime");
    return false;
  }

  // Loop through odd numbers starting from 3 up to the square root of num
  for (let i = 3; i * i <= num; i += 2) {
    console.log(i, "checking divisibility");
    if (num % i === 0) {
      console.log("Divisible by", i, "so not a prime number");
      return false;
    }
  }

  console.log(num, "is a prime number");
  return true;
}

console.log(isPrime(4));  // false
console.log(isPrime(7));  // true
console.log(isPrime(2));  // true

