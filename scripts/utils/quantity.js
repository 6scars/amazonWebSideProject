import {cart} from '../../data/cart-class.js';
//return how many items are in cart
export function updateCartQuantity(){
    let quantityCart=0;
      cart.cartItems.forEach((cartItem)=>{
        quantityCart += cartItem.quantity;
        console.log(cartItem);
      });
      
      return quantityCart;
  };