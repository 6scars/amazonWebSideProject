import {products} from './products.js'

export function searchedProducts(word){
    const finded = products.filter(item=>{
        return item.name.toLowerCase().includes(word.toLowerCase());
    })
    return finded;
}