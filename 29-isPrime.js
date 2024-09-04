// function isPrime(num) {
//     if(num < 2){
//         return false + num + " is not prime";
//     }

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         // Jika ditemukan pembagi selain 1 dan bilangan itu sendiri
//         if (num % i === 0) {
//           return false + num + " is not prime";
//         }
//       }

//     return true + num + " is prime";
// }

function isPrime(number) {
    // Any number less than 2 is not prime (including negative numbers and 0)
    if (number < 2) {
      return false;
    }
  
    // Only need to check divisors up to the square root of the number
    for (let i = 2; i * i <= number; i++) {
      // If number is divisible by any i, then it's not prime
      if (number % i === 0) {
        return false;
      }
    }
  
    // If no divisors were found, the number is prime
    return true;
}

console.log(isPrime(1))
console.log(isPrime(4))
console.log(isPrime(3))
console.log(isPrime(-1))
console.log(isPrime(73))