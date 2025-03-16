import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';
import {updateCartQuantity} from './utils/quantity.js';



let productsHtml = '';
let timeoutId;
products.forEach((content)=>{
    productsHtml+=`<div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${content.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${content.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars" src="images/ratings/rating-${content.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${content.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(content.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected="" value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart product-${content.id}">
              <img src="images/icons/checkmark.png">
              Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${content.id}"">
            Add to Cart
          </button>
        </div>`;
});






function addEventToButtons(){document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
      const productId = button.dataset.productId;

      addToCart(productId);
      document.querySelector('.js-cart-quantity').innerHTML = updateCartQuantity();

  
      const timeoutElement = document.querySelector(`.product-${productId}`)
      timeoutElement.classList.add('visible-added-sign');
      
      if(timeoutId){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>{
          timeoutElement.classList.remove('visible-added-sign');
        },2000);
      }else{
        timeoutId = setTimeout(()=>{
          timeoutElement.classList.remove('visible-added-sign');
        },2000);
      }

      
      
    });
  });
};






document.querySelector('.products-grid').innerHTML = productsHtml;
document.querySelector('.js-cart-quantity').innerHTML = updateCartQuantity();
addEventToButtons();




