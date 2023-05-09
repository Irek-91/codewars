var countBits = function(n) {
let result = 0;
let nBits = n.toString(2).split('');
for (i = 0; i <nBits.length; i++) {
    if (+nBits[i] == 1) {result += 1};
}
return result;
}

countBits = n => n.toString(2).split('0').join('').length;