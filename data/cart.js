export let cart = JSON.parse(localStorage.getItem('cart')) 


if(!cart.length){
  cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
  },{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
  }];

  saveToStorage();
}

console.log(JSON.parse(localStorage.getItem('cart')));

export function addToCart(productId){
    let matchingItem=NaN;
    cart.forEach((thing)=>{
      if(thing.productId === productId){
        matchingItem = thing;
      };
    });

    if(matchingItem){
      matchingItem.quantity++;
    }else{
      cart.push(
            {
              productId: productId,
              quantity: 1,
      });
    };




    saveToStorage();
};


export function removeFromCart(dataIdElement){
  const newCart = [];

  cart.forEach((cartItem)=>{
    if(cartItem.productId !== dataIdElement){
      newCart.push(cartItem);
      
    };
  });
  cart = newCart;




  saveToStorage();
};


export function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function overwriteQuantityInCart(prodId, containerElement, quantity){
  cart.forEach((cartItem)=>{
      if(cartItem.productId === prodId){
          cartItem.quantity = quantity;
          
          let quantityOfItems = containerElement.querySelector('.js-quantity-label');
          quantityOfItems.innerHTML = quantity;
          localStorage.setItem('cart', JSON.stringify(cart));

      };
  });
};
