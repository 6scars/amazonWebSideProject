export let cart = [];

export function addToCart(productId){
    let matchingItem=NaN;
    cart.forEach((thing)=>{
      if(thing.productId === productId){
        matchingItem = thing;
      };
    });

    if(matchingItem){
      matchingItem.quantity++;
    }else{
      cart.push(
            {
              productId: productId,
              quantity: 1,
      });
    };
};