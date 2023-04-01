function mango(quantity, price){
    let totalPrice = 1;
    totalPrice = (Math.ceil(quantity / 1.5)) * price;
    return totalPrice;
    }