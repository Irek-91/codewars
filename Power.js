/*Цель состоит в том, чтобы создать функцию из двух входных данных number и power, 
которая "поднимает" число до степени (т.е. умножает число само на себя в разы).*/
function numberToPower(number, power){
var total = 1;
for (var i = 1; i <= power; i++) { 
    total = total * number;
    }
    return total;
}