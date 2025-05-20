let lunches = [];

function addLunchToEnd(arr, str) {
  console.log(str + " added to the end of the lunch menu.")
  arr.push(str)
  return arr
}

function addLunchToStart(arr, str) {
  console.log(str + " added to the start of the lunch menu.")
  arr.unshift(str)
  return arr
}

function removeLastLunch(arr) {
  if (arr.length > 0) {
  console.log(arr[arr.length -1] + " removed from the end of the lunch menu.")
  arr.pop()
  return arr
  }
  console.log("No lunches to remove.")
  
} 

function removeFirstLunch(arr) {
  if (arr.length > 0) {
  console.log(arr[0] + " removed from the start of the lunch menu.")
  arr.shift()
  return arr
  }
  console.log("No lunches to remove.")
} 

function getRandomLunch(arr) {
  if (arr.length > 0) {
  let randomIndex = Math.floor(Math.random()*arr.length)
  console.log("Randomly selected lunch: " + arr[randomIndex])
  return
  }
  console.log("No lunches available.")
}

function showLunchMenu(arr) {
  if (arr.length > 0) {
  console.log("Menu items: " + arr.join(", "))
  return
  }
  console.log("The menu is empty.")
}

let test = ["Apple, banana, shawarma"]
