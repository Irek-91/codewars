function nearestSq(n){
let n1;
let n2;
n1 = (Math.floor(n ** 0.5)) ** 2;
n2 = (Math.ceil(n ** 0.5)) ** 2;
return ((n2 - n) < (n - n1)) ? n2 : n1;
}