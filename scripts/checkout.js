import {cart, removeFromCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';
import {updateCartQuantity} from './utils/quantity.js';




function displayCartSummary(){
    let cartSummaryHTML='';

    cart.forEach((cartItem)=>{
        products.forEach((productsItem)=>{
            if(cartItem.productId === productsItem.id){
                
    
                cartSummaryHTML+= `
                    <div class="cart-item-container js-cart-item-container-${productsItem.id}">
                        <div class="delivery-date">
                            Delivery date: Tuesday, June 21
                        </div>
    
                        <div class="cart-item-details-grid">
                        <img class="product-image" src="${productsItem.image}">
    
                        <div class="cart-item-details">
                            <div class="product-name">
                                ${productsItem.name}
                            </div>
                            <div class="product-price">
                                $${formatCurrency(productsItem.priceCents)}
                            </div>
                            <div class="product-quantity">
                            <span>
                                Quantity: <span class="quantity-label js-quantity-label">${cartItem.quantity}</span>
                            </span>
                            <span class="update-quantity-link link-primary js-update-quantity-link " data-product-id-quantity=${cartItem.productId}>
                                Update
                            </span>
                            <input class='quantity-input js-quantity-input'>
                                <span class="save-quantity-link link-primary js-save-quantity-link" data-save-prod-id = ${cartItem.productId}>
                                    save
                                </span>
                            </input>
                            <span class="delete-quantity-link link-primary js-delete-link" data-delete-id=${cartItem.productId}>
                                Delete
                            </span>
                            </div>
                        </div>
    
                        <div class="delivery-options">
                            <div class="delivery-options-title">
                                Choose a delivery option:
                            </div>
                            <div class="delivery-option">
                            <input type="radio" checked="" class="delivery-option-input" name="delivery-option-${productsItem.id}">
                            <div>
                                <div class="delivery-option-date">
                                  Tuesday, June 21
                                </div>
                                <div class="delivery-option-price">
                                  FREE Shipping
                                </div>
                            </div>
                            </div>
                            <div class="delivery-option">
                            <input type="radio" class="delivery-option-input" name="delivery-option-${productsItem.id}">
                            <div>
                                <div class="delivery-option-date">
                                    Wednesday, June 15
                                </div>
                                <div class="delivery-option-price">
                                    $4.99 - Shipping
                                </div>
                            </div>
                            </div>
                            <div class="delivery-option">
                            <input type="radio" class="delivery-option-input" name="delivery-option-${productsItem.id}">
                            <div>
                                <div class="delivery-option-date">
                                    Monday, June 13
                                </div>
                                <div class="delivery-option-price">
                                $9.99 - Shipping
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                `   
            };
            
        });
   
    });

    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

};

function removeContainer(ContainerId){
    const container = document.querySelector(`.js-cart-item-container-${ContainerId}`);
    container.remove();
}

function iteringAddEventOnClick(){
    let deleteLinkElements = document.querySelectorAll('.js-delete-link');
    deleteLinkElements.forEach((deleteElement)=>{
        deleteElement.addEventListener('click',()=>{
            let dataIdElement = deleteElement.dataset.deleteId;
    
            removeFromCart(dataIdElement);
            removeContainer(dataIdElement);
            displayQuantityInHeader();

        });
        
    });
};


function iteringAddEventOnClickUpdateQuantity(){
    const updateElements = document.querySelectorAll('.js-update-quantity-link');

    function update(event){
        let updateItem = event.currentTarget;
        let itemContainer= document.querySelector(`.js-cart-item-container-${updateItem.dataset.productIdQuantity}`);
        itemContainer.classList.add('is-editing-quantity');
        console.log(itemContainer);
    }

    updateElements.forEach((updateItem)=>{
        updateItem.addEventListener('click',update);
    });
};



function iteringAddEventOnClickSaveQuantity(){
    const saveLink = document.querySelectorAll('.js-save-quantity-link');

    function removeClass(event){
        let saveLinkItem = event.currentTarget;
        let prodId = saveLinkItem.dataset.saveProdId;
        const itemElement = document.querySelector(`.js-cart-item-container-${prodId}`);
        itemElement.classList.remove('is-editing-quantity');
        console.log(event);
    };

    function saveQuantity(event){
        let saveLinkItem = event.currentTarget;
        let prodId = saveLinkItem.dataset.saveProdId;

        let containerElement = document.querySelector(`.js-cart-item-container-${prodId}`);
        let inputElement = containerElement.querySelector('.js-quantity-input');

        const quantity = Number(inputElement.value);
        overwriteQuantityInCart(prodId, containerElement, quantity);
    };



    function overwriteQuantityInCart(prodId, containerElement, quantity){
        cart.forEach((cartItem)=>{
            if(cartItem.productId === prodId){
                cartItem.quantity = quantity;
                
                let quantityOfItems = containerElement.querySelector('.js-quantity-label');
                quantityOfItems.innerHTML = quantity;
                localStorage.setItem('cart', JSON.stringify(cart));

            };
        });
    };



    saveLink.forEach((saveLinkItem)=>{
        saveLinkItem.addEventListener('click',removeClass);
        saveLinkItem.addEventListener('click',saveQuantity);
    });
};





function displayQuantityInHeader(){
    document.querySelector('.js-return-to-home-link').innerHTML = `${updateCartQuantity()}`;

}
    





displayCartSummary();
iteringAddEventOnClick();
displayQuantityInHeader();
iteringAddEventOnClickUpdateQuantity();
iteringAddEventOnClickSaveQuantity();




