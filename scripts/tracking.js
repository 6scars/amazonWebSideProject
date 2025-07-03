import {loadProductsFetch} from '../data/products.js';
import {displaySummary} from './tracking/tracking.js';
loadPage()
async function loadPage(){
    await loadProductsFetch();

    displaySummary();
}

