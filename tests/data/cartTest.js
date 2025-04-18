import {addToCart, cart, loadFromStorage, removeFromCart} from '../../data/cart.js'
import {products} from '../../data/products.js'

describe('test suite: addToCart', ()=>{

    beforeEach(()=>{
        spyOn(localStorage, 'setItem');
    })


    it('adds existing product to the cart',()=>{
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity:1,
                deliveryOptionId: '1'
            }])
        });
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        console.log(cart)
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);

        expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify(cart))





    });



    it('adds a new product to the cart', ()=>{
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([])
        });
        
        loadFromStorage();
        
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        console.log(cart)
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify(cart))

        
    });
});

describe('test suite: removeFromCart', ()=>{
    beforeEach(()=>{
        spyOn(localStorage, 'setItem');
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([{
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 2,
                deliveryOptionId: '1'
              },{
                productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                quantity: 1,
                deliveryOptionId: '2'
              }])
        });
        loadFromStorage();
        
    });
    

    const product1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    const product2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";
    


    it('remove product that is in the cart',()=>{
        removeFromCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6")
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionId: '2'
          }]))
        
        
    });
    
    it('remove product that is not in the cart',()=>{
        removeFromCart("the are not exist such product in the cart")
        expect(cart.length).toEqual(2)
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionId: '1'
          },{
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionId: '2'
          }]))
    });



});