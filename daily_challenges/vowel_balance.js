// Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

// The string can contain any characters.
// The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
// If there's an odd number of characters in the string, ignore the center character.
//1. isBalanced("racecar") should return true.
//2. isBalanced("Lorem Ipsum") should return true.
//3. isBalanced("Kitty Ipsum") should return false.
//4. isBalanced("string") should return false.
//5. isBalanced(" ") should return true.
//6. isBalanced("abcdefghijklmnopqrstuvwxyz") should return false.
//7. isBalanced("123A#b!E&#x26;*456-o.U") should return true.
function isBalanced(str) {
  const vowels = "aeuioAEUIO";
  let counter1 = 0;
  let counter2 = 0;
  let middle = str.length % 2 === 0 ? 0 : 1;
  const firstHalf = str.slice(0, str.length / 2);
  const secondHalf = str.slice(str.length / 2 + middle);
  for (let char of firstHalf) {
    if (vowels.includes(char)) counter1++;
  }
  for (let char of secondHalf) {
    if (vowels.includes(char)) counter2++;
  }
  return counter1 === counter2;
}
console.log(isBalanced("racecar"));
console.log(isBalanced("Kitty Ipsum"));
