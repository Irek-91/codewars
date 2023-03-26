/* функция xor должна иметь поведение, описанное выше, возвращающее true, если точно одно из двух выражений 
 принимает значение true, в противном случае false.*/

function xor(a, b) {
    if ((a === true) && (b !== true)){
    return true
    } else if ((a !== true) && (b === true)){
    return true
    } else {
    return false
    }
  }