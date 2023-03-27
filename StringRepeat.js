//пытался сделать так, но выводил ошибку.
let repeatStr1;
function repeatStr (n, s) {
    for (i = 0; i < n; i++) {
    repeatStr1 = repeatStr1 + s;
    }
    return repeatStr1;
}
repeatStr (5, '#');

//тут с помощью короткого метода
function repeatStr (n, s) {
    return s.repeat(n);
}
repeatStr (5, '#');
