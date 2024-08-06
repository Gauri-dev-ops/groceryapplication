// script.js

// Sample product data
const products = [
  { id: 1, name: 'Apple', price: 0.5, description: 'Fresh red apple' },
  { id: 2, name: 'Banana', price: 0.3, description: 'Fresh yellow banana' },
  { id: 3, name: 'Carrot', price: 0.2, description: 'Fresh orange carrot' }
];

// Cart array
let cart = [];

// Function to display products
function displayProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      productItem.innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productItem);
  });
}

// Function to add products to the cart
function addToCart(productId) {
  const product = products.find(prod => prod.id === productId);
  cart.push(product);
  displayCart();
}

// Function to display cart items
function displayCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';
  cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
          <h3>${item.name}</h3>
          <p>$${item.price.toFixed(2)}</p>
          <button onclick="removeFromCart(${item.id})">Remove</button>
      `;
      cartList.appendChild(cartItem);
  });
}

// Function to remove items from the cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  displayCart();
}

// Event listener for checkout form submission
document.getElementById('checkout-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Order placed successfully!');
  cart = [];
  displayCart();
});

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  displayProducts();
  displayCart();
});
