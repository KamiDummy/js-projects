function truncateString(str, max) {

  if (str.length <= max) return str
  return str.slice(0, max) + "..."
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
