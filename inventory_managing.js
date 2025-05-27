const inventory = []

function findProductIndex(product) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === product.toLowerCase()) return i
  }
  return -1
}

function addProduct(product) {
  const productIndex = findProductIndex(product.name)
  if (productIndex != -1) {
    inventory[productIndex].quantity += product.quantity
    console.log(`${inventory[productIndex].name} quantity updated`)
    return
  }
  product.name = product.name.toLowerCase()
  inventory.push(product)
  console.log(`${product.name} added to inventory`)
}

function removeProduct(productName, productQuantity) {
  const productIndex = findProductIndex(productName)

  if (productIndex === -1) {
    console.log(`${productName.toLowerCase()} not found`)
    return
  }

  if (inventory[productIndex].quantity < productQuantity){
    console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[productIndex].quantity}`)
    return
  }

  inventory[productIndex].quantity -= productQuantity
  console.log(`Remaining ${productName.toLowerCase()} pieces: ${inventory[productIndex].quantity}`)
  if (inventory[productIndex].quantity === 0) {
    inventory.splice(productIndex, 1)
  }

}
