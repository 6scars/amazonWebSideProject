import {products} from '../../data/products.js'
export function searchBar(){

    const searchButton = document.querySelector('.js-search-button');

    searchButton.addEventListener('click',()=>{
        const searchBar = document.querySelector('.js-search-bar');
        window.location.href = `amazon.html?search=${searchBar.value}`;
    })

}   



export function searchedProducts(word){
    const finded = products.filter(item=>{
        return item.name.toLowerCase().includes(word.toLowerCase());
    })
    return finded;
}
