function expressionMatter(a, b, c) {
let max1 = a*(b+c);
let max2= a*b*c;
let max3 = a+b*c;
let max4 = (a+b)*c;
let max5 = a+b+c;
return Math.max(max1, max2, max3, max4, max5)
}
expressionMatter(1,5,1)