import {loadOrdersSummary} from './orders/yourOrdersSummary.js';
import {orders} from '../data/orders.js';
import {loadProductsFetch} from '../data/products.js';
import {updateCartQuantity} from '../scripts/utils/quantity.js'
import {cart} from '../data/cart-class.js'
import {updateCartQuantityHeader} from './utils/quantity.js'

async function load(){
    await loadProductsFetch();
    loadOrdersSummary();
    updateCartQuantityHeader();

    addEventOnClick();
}
load();


function addEventOnClick(){
    const productEl = document.querySelectorAll('.js-buy-again-button');
    productEl.forEach((el)=>{
            el.addEventListener('click',()=>{
                cart.addToCart(el.dataset.productId);
                updateCartQuantityHeader();
            });
    });
}

