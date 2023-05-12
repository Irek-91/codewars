var sing = function () {
let arrSing = [];
for ( i = 99; i > 2; --i) {
    arrSing.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
    arrSing.push(`Take one down and pass it around, ${i-1} bottles of beer on the wall.`);}
arrSing.push(`2 bottles of beer on the wall, 2 bottles of beer.`);
arrSing.push(`Take one down and pass it around, 1 bottle of beer on the wall.`);   
arrSing.push("1 bottle of beer on the wall, 1 bottle of beer.");
arrSing.push("Take one down and pass it around, no more bottles of beer on the wall.");
arrSing.push("No more bottles of beer on the wall, no more bottles of beer.");
arrSing.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
return arrSing
};