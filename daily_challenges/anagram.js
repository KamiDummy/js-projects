// Anagram Checker
// Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

// Ignore casing and white space.
// areAnagrams("listen", "silent") should return true.
// areAnagrams("School master", "The classroom") should return true.
// areAnagrams("A gentleman", "Elegant man") should return true.
// areAnagrams("Hello", "World") should return false.
// areAnagrams("apple", "banana") should return false.
// areAnagrams("cat", "dog") should return false.
function areAnagrams(str1, str2) {
  str1 = str1.replace(/\s/g, "");
  str2 = str2.replace(/\s/g, "");
  if (str1.length !== str2.length) return false;
  const arr1 = str1.toLowerCase().split("").sort();
  const arr2 = str2.toLowerCase().split("").sort();
  for (let i = 0; i < str1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
console.log(areAnagrams("School master", "The classroom"));
console.log(areAnagrams("listen", "silent"));
