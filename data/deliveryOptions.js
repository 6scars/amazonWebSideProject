import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import isWeekend from '../scripts/utils/dates.js';

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
    const deliveryDate = today.add(9, 'days');
    const FSS = [7,6,5];
    const index = FSS.findIndex(el => el === deliveryDate.day());
    

    if(index !== -1){
        return deliveryDate.add(index+1, 'days')
    }

    
    return deliveryDate;

}


