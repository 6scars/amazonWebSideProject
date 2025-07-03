import {loopCartProd as loopProd} from '../../data/products.js';
import {loopOrders, getArrayProductsOrders} from '../../data/orders.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';



const url = new URL(window.location.href);
const orderId = url.searchParams.get('orderId');
const productId = url.searchParams.get('productId');



export function displaySummary(){
    const product = loopProd(productId);
    const arrayProducts = getArrayProductsOrders(orderId, productId);
    let deliveryTime = dayjs(arrayProducts.estimatedDeliveryTime).format('dddd, MMMM DD');


   let temp= `
            <div class="order-tracking">
            <a class="back-to-orders-link link-primary" href="orders.html">
            View all orders
            </a>

            <div class="delivery-date">
            Arriving on 
                ${deliveryTime}
            </div>

            <div class="product-info">
                ${product.name}
            </div>

            <div class="product-info">
            Quantity: ${arrayProducts.quantity}
            </div>

            <img class="product-image" src=" ${product.image}">

            <div class="progress-labels-container">
            <div class="progress-label">
                Preparing
            </div>
            <div class="progress-label current-status">
                Shipped
            </div>
            <div class="progress-label">
                Delivered
            </div>
            </div>

            <div class="progress-bar-container">
            <div class="progress-bar"></div>
            </div>
        </div>
    `;
    document.querySelector('.js-main').innerHTML = temp;
    
}

