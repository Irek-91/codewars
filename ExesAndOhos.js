function XO(str) {
let arr = str.split('');
let xCount = 0;
let oCount = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] == 'x' || arr[i] == 'X' ) { xCount += 1} 
    if (arr[i] == 'o' || arr[i] == 'O' ) { oCount += 1} 
}
if (xCount == oCount) {return true} else {return false}
}
XO("xxOoooooo")