function isPythagoreanTriple(integers) {
let sortIntegers = integers.sort(function (a, b) {
    return a - b;
});;
if ( (sortIntegers[2]) ** 2 == ((sortIntegers[0]) ** 2 + (sortIntegers[1]) ** 2)) {
    return true} else {
        return false}
}
isPythagoreanTriple([3, 4, 5]);