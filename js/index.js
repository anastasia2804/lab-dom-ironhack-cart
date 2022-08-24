// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
console.log(quantity.value)
  let subtotal = price.innerHTML * quantity.value
console.log(subtotal)

product.querySelector('.subtotal').innerHTML = subtotal

  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let total = 0
  // ITERATION 2
  //... your code goes here
  let allProducts = document.querySelectorAll('.product')
  for (let i=0; i<allProducts.length; i++){
    total += updateSubtotal(allProducts[i])
  }

  // ITERATION 3
  //... your code goes here
document.querySelector('#total-value span').innerHTML = total



}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode);
  target.parentElement.parentElement.remove()
  
  

}

// ITERATION 5

function createProduct() {

  let productName = document.querySelector('.create-product [type="text"]').value
  let productPrice = document.querySelector('.create-product [type="number"]').value

console.log(productName)
  let trElement = document.createElement('tr')

  let tdElement1 = document.createElement('td')
  let tdElement2 = document.createElement('td')
  let tdElement3 = document.createElement('td')
  let tdElement4 = document.createElement('td')
  let tdElement5 = document.createElement('td')

  tdElement1.innerHTML = `<span> ${productName} </span>`
  tdElement2.innerHTML = `<span>$${productPrice} </span>`
  tdElement3.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`
  tdElement4.innerHTML = `$<span>0</span>`
  tdElement5.innerHTML = `<button class="btn btn-remove">Remove</button>`

  let removeButton = document.querySelector('.action button')

  trElement.classList.add('product')
  tdElement4.classList.add('subtotal')
  tdElement5.classList.add('action')
  removeButton.classList.add('btn', 'btn-remove')
  
  console.log('remove', tdElement5)
  
  console.log("Price", tdElement2.innerText)
  
  trElement.appendChild(tdElement1)
  trElement.appendChild(tdElement2)
  trElement.appendChild(tdElement3)
  trElement.appendChild(tdElement4)
  trElement.appendChild(tdElement5)
  
  let parent = document.querySelector('tbody')
  parent.appendChild(trElement)

  const heardButton = trElement.querySelector('.btn-remove')
  
  heardButton.addEventListener('click', removeProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let removeBtn = document.querySelectorAll('.btn-remove')

  for(let i=0; i<removeBtn.length; i++){
    removeBtn[i].addEventListener('click', removeProduct)
  }

  let createButton = document.querySelector('#create')
  createButton.addEventListener('click', createProduct)
});
