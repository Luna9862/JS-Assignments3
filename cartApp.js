// Function to initialize the cart in localStorage if it doesn't exist
function initializeCart() {
    let cart = localStorage.getItem('cart');
    if (!cart) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }
  
  // Function to add an item to the cart
  function addItem(item) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Function to remove an item from the cart based on its id
  function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let updatedCart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }
  
  // Function to display the cart contents
  function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log('Cart Contents:');
    console.log(cart);
  }
  
  // Event listener for the addItemForm submission
  document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let itemName = document.getElementById('itemName').value;
    let itemPrice = parseFloat(document.getElementById('itemPrice').value);
  
    if (!itemName || isNaN(itemPrice)) {
      alert('Please enter valid item details.');
      return;
    }
  
    let newItem = {
      id: Date.now(), // Using timestamp as a unique id (for simplicity in this example)
      name: itemName,
      price: itemPrice
    };
  
    addItem(newItem);
    document.getElementById('addItemForm').reset();
  });
  
  // Event listener for the displayCartButton
  document.getElementById('displayCartButton').addEventListener('click', function() {
    displayCart();
  });
  
  // Initialize cart on page load
  initializeCart();
  