// cartApp.js

// Function to initialize the cart in localStorage if it doesn't exist
function initializeCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
  
  // Function to add an item to the cart
  function addItem(item) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Function to remove an item from the cart by item id
  function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Function to display the cart contents in the console
  function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log('Cart Contents:');
    console.log(cart);
  }
  
  // Event listener for the add item form
  document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let itemName = document.getElementById('itemName').value;
    let itemPrice = parseFloat(document.getElementById('itemPrice').value);
    // Generate a random ID for the item (just an example)
    let itemId = Math.floor(Math.random() * 1000); // Replace with your actual ID generation logic
    let item = { id: itemId, name: itemName, price: itemPrice };
    addItem(item);
    console.log('Item added to cart:', item);
    // Reset the form after adding the item
    document.getElementById('addItemForm').reset();
  });
  
  // Event listener for the display cart button
  document.getElementById('displayCartBtn').addEventListener('click', function(event) {
    event.preventDefault();
    displayCart();
  });
  
  // Initialize the cart when the script is first loaded
  initializeCart();
  