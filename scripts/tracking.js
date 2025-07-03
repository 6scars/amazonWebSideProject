import {loadProductsFetch} from '../data/products.js';
import {displaySummary} from './tracking/tracking.js';
import {updateCartQuantityHeader} from './utils/quantity.js'
loadPage()
async function loadPage(){
    await loadProductsFetch();

    displaySummary();
    updateCartQuantityHeader();
}

