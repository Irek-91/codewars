var mispelled = function(word1, word2) {
let xSum = 0;
if (Math.abs(word1.length - word2.length) > 1 ) {return false} else {
    for (i = 0; i < word1.length; i++) {
    if (word1[i] === word2[i]) { 
        xSum += 1} else {
        xSum += 0}
        }
    }
if (xSum >= 1) {return true} else {
    return false}
}