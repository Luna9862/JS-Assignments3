//we are selecting the unordered list by using its id('list')
const shoppingCart = document.getElementById('list'); 
//We are updating 'Apples' to say "Granny Smith Apples" from the list. Remember the starts from 0,1,2,3***
shoppingCart.children[1].innerHTML = 'Granny Smith Apples';
//We are removing the 'oat milk' from the unordered list by using remove.
shoppingCart.children[3].remove();
//we are adding kombucha a *new item* to the underorder list
const newItem = document.createElement('li');
newItem.innerHTML = 'Kombucha';
shoppingCart.appendChild(newItem);
// We are first clearing the list using the while loop
while (shoppingCart.children.length > 0) {
    shoppingCart.children[0].remove();
}
//we are entering the new items that we want to add to the shoppingCart
const snacks = ['protein bars', 'almonds', 'peanut butter'];

//we will be adding the new items to the shopping cart by using the fill function
function fillList() {
    snacks.forEach(function (x) {
        const newListItem = document.createElement('li');
        newListItem.innerHTML = x;
        shoppingCart.appendChild(newListItem);
    });

    const almondsIndex = snacks.indexOf('almonds');
    if (almondsIndex !== -1) {
        shoppingCart.children[almondsIndex].setAttribute('class', 'important');
    }
}

fillList();

console.log(shoppingCart);

