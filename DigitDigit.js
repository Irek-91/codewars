function squareDigits(num){
    let result = '';
    for (i = 0; i < String(num).length; i++)
    result +=(String(num)[i]) ** 2;
    return +result;
}