function largestOfAll(arrays) {
  const output = []
  for (let arr of arrays) {
    let largest = arr[0]
    for (let number of arr) {
      if (largest < number) largest = number
    }
    output.push(largest)
  } 
  return output
}
console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
