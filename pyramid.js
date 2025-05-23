function pyramid(pattern, rows, upwards) {
  let result = "\n";
  if (!upwards) {
    for (let i = 0; i < rows; i++) {
      result += " ".repeat(rows - i - 1) + pattern.repeat(i + 1) + pattern.repeat(i) + "\n";
    }
  } else {
    for (let i = rows; i > 0; i--) {
      result += " ".repeat(rows - i) + pattern.repeat(i - 1) + pattern.repeat(i) + "\n";
    }
  }
  return result;
}

console.log(pyramid("o", 4, true));
