import {displayCartSummary, iteringAddEventOnClickDelete, iteringAddEventOnClickDate} from '../../scripts/checkout/orderSummary.js';
import {loadFromStorage, cart} from '../../data/cart.js'
import {loadProductsFetch} from '../../data/products.js';


describe('test suite: displayCartSummary', ()=>{
    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

        beforeAll((done)=>{
            loadProductsFetch().then(()=>{
                done();
            }).catch(()=>{
                return 'orderSummaryTest.js';
            });
        });
        
        beforeEach(()=>{
            
            spyOn(localStorage, 'setItem');

                document.querySelector('.js-test-container').innerHTML=`
            <div class="js-checkout-header-middle-section"></div>
            <div class="js-payment-summary"></div>
            <div class="js-order-summary"></div>
            
            `;

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
            displayCartSummary();
            
        });
 

    // afterEach(()=>{
    //     document.querySelector('.js-test-container').innerHTML=" ";
    // })
    


    it('displays the cart',()=>{
        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(2);

        expect(
            document.querySelector(`.quantity-label js-quantity-label-${productId1}`).innerText
        ).toContain(
            `Quantity: 2`
        );

        expect(
            document.querySelector(`.js-product-quantity-${productId2}`).innerText
        ).toContain(
            'Quantity: 1'
        )

    })

    it("removes a product", ()=>{
        iteringAddEventOnClickDelete();

        document.querySelector(`.js-delete-link-${productId1}`).click();
        expect(
            document.querySelectorAll(".js-cart-item-container").length
        ).toEqual(1);

        expect(
            document.querySelector(`.js-delete-link-${productId1}`)
        ).toEqual(null)

        expect(
            document.querySelector(`.js-delete-link-${productId2}`)
        ).not.toEqual(null)

        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual("15b6fc6f-327a-4ec4-896f-486349e85a3d");

        expect(
            document.querySelector(`.js-product-name-${productId2}`).innerText
        ).toEqual("Intermediate Size Basketball")

        expect(document.querySelector('.product-price').innerText).toContain('$')
        

    });

    it("updating the delivery option",()=>{
        iteringAddEventOnClickDate()
        let element = document.querySelector(`.js-deliver-option-input-${productId1}-3`);
        element.click()
        // rElement.click()

        expect(element.checked).toEqual(true)
        expect(cart.length).toEqual(2);
        expect(cart[0].deliveryOptionId).toEqual('3');
        let shiAnHan = document.querySelector(".js-shipping-and-handling").innerHTML
        let totOrd = document.querySelector('.js-order-total').innerHTML
        expect(shiAnHan).toEqual('$14.98');
        expect(totOrd).toEqual('$63.50')



        //expect(rElement.)
    })






});