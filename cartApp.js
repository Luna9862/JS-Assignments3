
const cartModule = (function() {
    function initializeCart() {
      if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
      }
    }
  
    function addItem(item) {
      let cart = JSON.parse(localStorage.getItem('cart'));
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  
    function removeItem(itemId) {
      let cart = JSON.parse(localStorage.getItem('cart'));
      const updatedCart = cart.filter(item => item.id !== itemId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  
    function displayCart() {
      let cart = JSON.parse(localStorage.getItem('cart'));
      console.log(cart);
    }
  
    function handleAddItemFormSubmit(event) {
      event.preventDefault();
      const itemName = document.getElementById('itemName').value;
      const itemPrice = parseFloat(document.getElementById('itemPrice').value);
      const newItem = {
        id: Date.now(),
        name: itemName,
        price: itemPrice
      };
      addItem(newItem);
      document.getElementById('addItemForm').reset();
    }
  
    function setupEventListeners() {
      initializeCart();
      document.getElementById('addItemForm').addEventListener('submit', handleAddItemFormSubmit);
      document.getElementById('displayCartButton').addEventListener('click', displayCart);
    }
  
    return {
      setupEventListeners: setupEventListeners,
      initializeCart: initializeCart,
      addItem: addItem,
      removeItem: removeItem,
      displayCart: displayCart
    };
  })();
  
  cartModule.setupEventListeners();
  