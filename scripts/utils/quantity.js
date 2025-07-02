import {cart} from '../../data/cart-class.js';
//return how many items are in cart
export function updateCartQuantity(){
    let quantityCart=0;
      cart.cartItems.forEach((cartItem)=>{
        quantityCart += cartItem.quantity;
      });
      
      return quantityCart;
  };

export function updateCartQuantityHeader(){
  document.querySelector('.js-cart-quantity').innerHTML = updateCartQuantity();
}