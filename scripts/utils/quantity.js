import {cart} from '../../data/cart.js';
//return how many items are in cart
export function updateCartQuantity(){
    let quantityCart=0;
      cart.forEach((cartItem)=>{
        quantityCart += cartItem.quantity;
      });
      return quantityCart;
  };