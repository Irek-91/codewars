/*Cоздайте функцию, которая принимает строку и один символ
и возвращает целое число, равное количеству вхождений,
второй аргумент которых найден в первом.*/
function strCount(str, letter){  
    let count = 0;
    for (let i = 0; i < str.length; i++) {
    if (str[i] == letter)
        count++;
    }
        return count;
}