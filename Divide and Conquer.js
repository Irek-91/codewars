function divCon(x){
let xSum = 0;
let xSubtract = 0;
    for (i = 0; i < x.length; i++) {
    if (x[i] === Number(x[i])) { 
        xSum += x[i];} else {
        xSubtract += Number(x[i])}
    } 
return xSum - xSubtract;
}