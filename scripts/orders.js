import {loadOrdersSummary} from './orders/yourOrdersSummary.js';
import {orders} from '../data/orders.js';
import {loadProductsFetch} from '../data/products.js';
import {updateCartQuantity} from '../scripts/utils/quantity.js'

async function load(){
    await loadProductsFetch();
    loadOrdersSummary();
    updateCartQuantityHeader();

}
load();

function updateCartQuantityHeader(){
    document.querySelector('.js-cart-quantity').innerHTML = updateCartQuantity();
}
