function dotCalculator (equation) {
    let equationArry = equation.split(' ');
        if (equationArry[1] === '+') {
            newArry = equationArry[0].length + equationArry[2].length} 
        else if (equationArry[1] === '-') 
            {newArry = Math.abs(equationArry[0].length - equationArry[2].length);
        } else if (equationArry[1] === '//')
            {newArry = Math.floor(equationArry[0].length / equationArry[2].length);
        } else {newArry = equationArry[0].length * equationArry[2].length;}
let result = '';
for (i = 0; i < newArry; i++) {
    result +='.';}
return result;
}