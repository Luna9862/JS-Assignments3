let shoppingList= ['pop tarts','ramen noodles','chips',
    'salsa','coffee'];
shoppingList.push('fruit loops');
shoppingList[4]='fair trade coffee';
shoppingList.splice(3,3,'rice');
shoppingList.splice(4,4,'beans');
let shoppingCart= [];
shoppingList.pop('fruit loops');
shoppingCart.push('fruit loops');
shoppingList.shift('pop tarts');
shoppingCart.push('pop tarts');
while (shoppingList.length > 0) {
   shoppingCart.push(shoppingList.shift());
}
shoppingCart.sort();
shoppingCart.reverse();
let shoppingCartString = shoppingCart.join(' , ');
console.log(shoppingList, shoppingCartString);
