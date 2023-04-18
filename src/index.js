// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  // 1
  let priceDOM = product.querySelector(".price span");
  let quantityDOM = product.querySelector(".quantity input");
  //2
  let price = priceDOM.innerText;
  let quantity = quantityDOM.value;
  //3
  let subtotal = price * quantity;
  //4 
  let subtotalPrice = product.querySelector(".subtotal span");
  //5
  subtotalPrice.innerText = subtotal;
  return subtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.querySelectorAll(".product")
  let total = 0;
 
  products.forEach((product) => {

    let totalPrice = updateSubtotal(product);
    total += totalPrice;

  });

  // ITERATION 3
  let element = document.querySelector("#total-value span");
  element.innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
