function frankenSplice (arr1, arr2, index) { 
  const tempArr  = arr2.slice(0, index)
  tempArr.push(...arr1)
  tempArr.push(...arr2.slice(index))
  return tempArr
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1))
