function add(...x) {
    var sum = 0;
    for(let i=0; i < x.length; i++){
      sum += (x[i] / (i + 1))
    }
    return Math.round(sum);
}