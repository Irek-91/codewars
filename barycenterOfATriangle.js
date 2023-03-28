// https://www.codewars.com/kata/5601c5f6ba804403c7000004/javascript

function barTriang(p1, p2, p3){
    let bar = [];  
    let x0 = +((p1[0] + p2[0] + p3[0]) / 3).toFixed(4);
    let y0 = +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4);
    bar.push(x0, y0);
    return bar;
    }