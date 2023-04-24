function findAverage(array) {
let sum = 0;
    if (array.length == 0) {return 0} else {
        for (key in array) {sum += array[key]}
        return sum/array.length
    }
}