function toAcronym(inp){
let result = [];
for (i = 0; i < inp.split(' ').length; ++i) {
    result.push(inp.split(' ')[i][0])
    }
return result.join('').toUpperCase();
}