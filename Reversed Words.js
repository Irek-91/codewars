function reverseWords(str) {
let resultArr = [];
let strArr = str.split(' ');
for (i = 0; i < strArr.length; i++) {
    resultArr.push(strArr[i].split('').reverse().join(''))
    }
return resultArr.join(' ');
}