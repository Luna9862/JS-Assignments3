// Function to initialize the cart in localStorage if it doesn't exist
function initializeCart() {
    let cart = localStorage.getItem('cart');
    if (!cart) { //if cart doesnt exist in local storage 
      localStorage.setItem('cart', JSON.stringify([]));
    }//initialize cart as an empty array 
  }
  
  // Function to add an item to the cart
  function addItem(item) {
    let cart = JSON.parse(localStorage.getItem('cart')); //retreive cart from local storage and parse from string to array
    cart.push(item); // add new item to cart array 
    localStorage.setItem('cart', JSON.stringify(cart)); //save updated cart back to localstorage 
  }
  
  // Function to remove an item from the cart based on its id
  function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')); //retreive cart from local storage and parse from string to array
    let updatedCart = cart.filter(item => item.id !== itemId); //create a new array excluding the item with the specified itemID
    localStorage.setItem('cart', JSON.stringify(updatedCart)); //save updated cart back to local storage 
  }
  
  // Function to display the cart contents
  function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));  //retreive cart from local storage and parse from string to array
    console.log('Cart Contents:'); //log the current contents of the cart array to the console
    console.log(cart);
  }
  
  // Event listener for the addItemForm submission
  document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault(); //prevent default form submission behvior 
    let itemName = document.getElementById('itemName').value; //get item name from form input 
    let itemPrice = parseFloat(document.getElementById('itemPrice').value);
  
    if (!itemName || isNaN(itemPrice)) {
      alert('Please enter valid item details.'); //alert user if item name is empty or item price is not a number 
      return;
    }
  //create a new item object 
    let newItem = {
      id: Date.now(), // Using timestamp as a unique id (for simplicity in this example)
      name: itemName,
      price: itemPrice
    };
  
    addItem(newItem); //add the new item to the cart
    document.getElementById('addItemForm').reset(); //reset the for after adding the item 
  });
  
  // Event listener for the displayCartButton
  document.getElementById('displayCartButton').addEventListener('click', function() {
    displayCart();
  });  // Display the current contents of the cart when the button is clicked
  
  // Initialize cart on page load
  initializeCart(); // Ensure the cart is initialized in localStorage when the page loads
  