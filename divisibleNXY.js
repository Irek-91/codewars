//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
    if (n > 0 && x > 0 && y > 00) {
    if (n % x === 0 && n % y === 0) {
    return true;} else {
    return false;}
    }
}

//меньше 
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
  }