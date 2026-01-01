const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const isPal = document.getElementById("result");

function isPalindrome(inputValue) {
  const regex = /[\W_]/g;
  const inputValueLower = inputValue.toLowerCase().replace(regex, "");

  if (!inputValue) {
    alert("Please input a value");
    return;
  }
  let temp = inputValueLower.split("").reverse().join("");
  if (temp == inputValueLower) {
    isPal.innerHTML = `${inputValue} is a palindrome`;
  } else isPal.innerHTML = `${inputValue} is not a Palindrome`;
}
