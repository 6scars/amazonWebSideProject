import {addToCart, cart} from '../../data/cart.js'

describe('test suite: addToCart', ()=>{
    it('adds existing product to the cart',()=>{

    });

    it('adds a new product to the cart', ()=>{
        addToCart('15b6fc6f-327a-4ec4-896f-486349e85a3d');
        expect(cart.lenght).toEqual(1);
    });
});