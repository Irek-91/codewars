// Возврат аддитивное значение, обратное каждому из них.
function invert(array) {
    let inverseArray = [];
    for (i = 0; i < array.length; ++i) {
    array[i] = - array[i];
    inverseArray.push(array[i]);}   
    return inverseArray;
    }