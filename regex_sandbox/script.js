const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");
const stringToTest = document.querySelector("#test-string");
const regexPattern = document.querySelector("#pattern");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
testButton.addEventListener("click", () => getResult());

function getFlags() {
  let result = "";
  if (caseInsensitiveFlag.checked) result += "i";
  if (globalFlag.checked) result += "g";
  return result;
}

function getResult() {
  const regexString = regexPattern.value;
  const regexFlags = getFlags();
  const regex = new RegExp(regexString, regexFlags);
  const matched = stringToTest.textContent.match(regex);
  stringToTest.innerHTML = stringToTest.textContent.replace(
    regex,
    "<span class='highlight'>$&</span>"
  );
  matched
    ? (testResult.textContent = matched.join(", "))
    : (testResult.textContent = "no match");
  1;
}
