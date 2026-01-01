const textArea = document.querySelector("#text-input")
textArea.addEventListener("input", updateCounter)
const charCount = document.querySelector("#char-count")
function updateCounter() {
  if (textArea.value.length >= 50) {
    charCount.classList.add("red")
    textArea.value = (textArea.value.slice(0, 50))
  } else {
    charCount.classList.remove("red")
  }
  charCount.textContent = `Character Count: ${textArea.value.length}/50`

}

