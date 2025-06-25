import{cart} from '../../data/cart-class.js';
export function renderCheckoutHeader(){
    const header = `Checkout (<a class="return-to-home-link js-return-to-home-link"
                    href="amazon.html">${cart.quantityInCart()} items</a>)`

    document.querySelector('.js-checkout-header-middle-section').innerHTML = header;
    
}