// Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.
// sumOfSquares(5) should return 55.
// sumOfSquares(10) should return 385.
// sumOfSquares(25) should return 5525.
// sumOfSquares(500) should return 41791750.
// sumOfSquares(1000) should return 333833500.
function sumOfSquares(n) {
  let out = 0;
  for (let i = 0; i <= n; i++) {
    out += i * i;
  }

  return out;
}
console.log(sumOfSquares(5));
