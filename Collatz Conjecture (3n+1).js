var hotpo = function(n){
if(n == 0) return 0; //Optional Handler to n = 0
let count = 0;
while (n > 1) {
    count++;
    if (n % 2 == 0) {
    n = n /2;} else {
    n = 3 * n +1;}
}
return count;
}