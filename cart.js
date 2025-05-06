// Add to cart function
function addToCart(productName, price, image = '') {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: productName, price: price, image: image });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " added to cart!");
}

  
  // View cart function
  function viewCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }
    let message = "Items in Cart:\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ₹${item.price}\n`;
    });
    alert(message);
  }
  
cart.js
// let cart = [];

// function addToCart(name, price) {
//   cart.push({ name, price });
//   alert(`${name} added to cart.`);
// }

// function viewCart() {
//   let message = "Your Cart:\n";
//   let total = 0;
//   cart.forEach(item => {
//     message += `${item.name} - ₹${item.price}\n`;
//     total += item.price;
//   });
//   message += `Total: ₹${total}`;
//   alert(message);
// }
