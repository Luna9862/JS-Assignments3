
const cartModule = {
    initializeCart: function() {
      if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
      }
    },
  
    addItem: function(item) {
      let cart = JSON.parse(localStorage.getItem('cart'));
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
    },
  
    removeItem: function(itemId) {
      let cart = JSON.parse(localStorage.getItem('cart'));
      const updatedCart = cart.filter(item => item.id !== itemId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    },
  
    displayCart: function() {
      let cart = JSON.parse(localStorage.getItem('cart'));
      console.log(cart);
    }
  };
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', function() {
    cartModule.initializeCart();
  
    const addItemForm = document.getElementById('addItemForm');
    addItemForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const itemName = document.getElementById('itemName').value;
      const itemPrice = parseFloat(document.getElementById('itemPrice').value);
      const newItem = {
        id: Date.now(),
        name: itemName,
        price: itemPrice
      };
      cartModule.addItem(newItem);
      addItemForm.reset();
    });
  
    const displayCartButton = document.getElementById('displayCartButton');
    displayCartButton.addEventListener('click', function() {
      cartModule.displayCart();
    });
  });
  