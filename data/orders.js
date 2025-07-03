export const orders = JSON.parse(localStorage.getItem('order')) || [];

export function addOrder(order){
    orders.unshift(order);
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('order', JSON.stringify(orders));
}


export function loopOrders(id){
    const founded = orders.find(order => order.id === id);
    return founded || 'none'
}
export function getArrayProductsOrders(orderId,productId){
    const arrayProducts = loopOrders(orderId).products;
    const a = arrayProducts.find(p => p.productId === productId)

    return a || 'none'
}

