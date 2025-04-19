export let cart;

loadFromStorage();

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart')) ;

  if(!cart){
    cart = [{
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionId: '1'
    },{
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionId: '2'
    }];
  
    saveToStorage();
  }
  
}




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
              deliveryOptionId: '1'
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
  //cart = JSON.parse(localStorage.getItem('cart'));

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


export function updateDeliveryOption(productId, deliveryOptionId){
  if(['1','2','3'].includes(deliveryOptionId)){
    let matchingItem;

    cart.forEach((cartItem)=>{
    if(cartItem.productId === productId){
      matchingItem = cartItem;
      matchingItem.deliveryOptionId = deliveryOptionId;
      saveToStorage();
      }
    });

  }
  

  
  
};

export function quantityInCart(){
  let quantity =0;
  cart.forEach((item)=>{
    quantity += item.quantity;
  })
  return quantity;
}