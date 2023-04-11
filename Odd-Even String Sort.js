function sortMyString(S) {
let sEven = '';
let sOdd = '';
let sResult = '';
    for (i = 0; i < S.length; i++) {
    if (i % 2 == 0) {
        sEven += S[i]} else {
        sOdd += S[i]} }    
    sResult = sEven + ' ' + sOdd;
return sResult;
}