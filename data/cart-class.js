import {loopCartProd} from './products.js'
class Cart{
    cartItems;
    #localStorageKey;


    constructor(Key){
        this.#localStorageKey = Key;
        this.#loadFromStorage();
    }

    #loadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) ;
      
        if(!this.cartItems){
          this.cartItems = [{
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionId: '1'
          },{
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionId: '2'
          }];
        
          this.saveToStorage();
        } 
      };


      addToCart(productId){
        let matchingItem=NaN;
        this.cartItems.forEach((thing)=>{
          if(thing.productId === productId){
            matchingItem = thing;
          };
        });
        


        let ob = loopCartProd(productId);
        if(matchingItem){
          matchingItem.quantity++;
        }else if(ob){
          
          this.cartItems.push(
                {
                  productId: productId,
                  quantity: 1,
                  deliveryOptionId: '1'
          });
        };
    
        this.saveToStorage();
    };



    removeFromCart(dataIdElement){
        const newCart = [];
      
        this.cartItems.forEach((cartItem)=>{
          if(cartItem.productId !== dataIdElement){
            newCart.push(cartItem);
            
          };
        });
        this.cartItems = newCart;
      
        this.saveToStorage();
      };


      saveToStorage(){
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
        //cart = JSON.parse(localStorage.getItem('cart'));
    
    };



    overwriteQuantityInCart(prodId, containerElement, quantity){
        this.cartitems.forEach((cartItem)=>{
            if(cartItem.productId === prodId){
                cartItem.quantity = quantity;
                
                let quantityOfItems = containerElement.querySelector('.js-quantity-label');
                quantityOfItems.innerHTML = quantity;
                this.saveToStorage()
        
            };
        });
    };




    updateDeliveryOption(productId, deliveryOptionId){
        if(['1','2','3'].includes(deliveryOptionId)){
          let matchingItem;
      
          this.cartItems.forEach((cartItem)=>{
          if(cartItem.productId === productId){
            matchingItem = cartItem;
            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
            }
          });
      
        }       
      };

      quantityInCart(){
        let quantity =0;
        this.cartItems.forEach((item)=>{
          quantity += item.quantity;
        })
        return quantity;
    }

}


const cart = new Cart('cart-oop');
const cart2 = new Cart('cart-business');

console.log(cart);
console.log(cart2);
console.log(cart2 instanceof Cart);
