function primeNumber(number) {
  if (number <= 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  } else {
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(primeNumber(11)) // true
console.log(primeNumber(13)) // true
console.log(primeNumber(17)) // true
console.log(primeNumber(20)) // false
console.log(primeNumber(35)) // false 




