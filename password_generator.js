function generatePassword(passLength) {
  const passChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
  let password = ""
  for (let i = 0; i < passLength; i ++) {
   let randomChar = Math.floor(Math.random() * passChars.length)
   password += passChars[randomChar]
  }
  return password
}

const password = generatePassword(12);
console.log("Generated password: " + password)
