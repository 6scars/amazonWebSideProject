import {cart} from '../../data/cart.js';
export function updateCartQuantity(){
    let quantityCart=0;
      cart.forEach((cartItem)=>{
        quantityCart += cartItem.quantity;
      });
      return quantityCart;
  };