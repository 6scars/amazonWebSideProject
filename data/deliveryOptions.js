export const deliveryOptions=[
    {
        id:'1',
        deliveryDays:7,
        priceCents: 0
    },{
        id:'2',
        deliveryDays:3,
        priceCents: 499
    },{
        id:'3',
        deliveryDays:1,
        priceCents: 999
    },
]
export function getDeliveryOptionOb(cartDeliveryOptionId){
    let matchingDeliveryOption;

        deliveryOptions.forEach((option)=>{
            if(option.id === cartDeliveryOptionId)
                matchingDeliveryOption = option;
            });

    return matchingDeliveryOption;

}

export function calculateDeliveryDate(option){
    const today = dayjs();
    const deliveryDate = today.add(option.deliveryDays, 'days');
    return deliveryDate;

}


