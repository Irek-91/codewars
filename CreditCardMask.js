// return masked string
function maskify(cc) {
    let arrCC = cc.split('');
    for (i = 0; i < (arrCC.length - 4); i++) {
    arrCC[i] = '#'}
    return arrCC.join('');
}
maskify('4556364607935616');