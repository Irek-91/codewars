//Возврат разницы между наибольшим и наименьшим значениями массива
function betweenExtremes(numbers) {
    let differenceMaxMin;
    differenceMaxMin = (Math.max.apply(null, numbers) - Math.min.apply(null, numbers));
    return differenceMaxMin;
    };
    betweenExtremes([1, 1, 1, 1, 1]);