const isPrime = (number) => {
    if(number===0 || number === 1){
        return "0 or 1 can not be Prime"
    }


    if (num % 2 === 0) { // Even numbers greater than 2 are not prime
        console.log("Even number greater than 2, not prime");
        return false;
      }

}

console.log(isPrime(4));  // false