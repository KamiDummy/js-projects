function mutation(arr) {
  arr[0] = arr[0].toLowerCase()
  arr[1] = arr[1].toLowerCase()
  for (const char of arr[1]) {
    if (!arr[0].includes(char)) return false
  }
  return true
}

console.log(mutation(["Test", "est"]))
