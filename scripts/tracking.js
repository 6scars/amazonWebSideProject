import {loadProductsFetch} from '../data/products.js';
import {displaySummary,greenProgress} from './tracking/tracking.js';
import {updateCartQuantityHeader} from './utils/quantity.js'
loadPage()
async function loadPage(){
    await loadProductsFetch();

    displaySummary();
    greenProgress();
    updateCartQuantityHeader();
    
}

