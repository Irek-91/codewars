//Возвращать сумму четных значений этой последовательности.
function sumEvenNumbers(input) {
    let sum = 0;
    for (var i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0 ) {
        sum += input[i];
        }
    }
    return sum;
    }