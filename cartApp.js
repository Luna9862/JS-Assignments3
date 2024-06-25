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
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log('Cart Contents:');
    console.log(cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price
    })));
}

initializeCart();

document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let item = {
        id: Date.now(), 
        name: document.getElementById('itemName').value,
        price: parseFloat(document.getElementById('itemPrice').value)
    };

    addItem(item);
    console.log('Item added to cart:', item);

    document.getElementById('itemName').value = ''; 
    document.getElementById('itemPrice').value = ''; 
});

document.getElementById('displayCartBtn').addEventListener('click', function() {
    displayCart();
});
