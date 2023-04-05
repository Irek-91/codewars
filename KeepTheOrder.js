//возвращает наименьший индекс, куда вы могли бы вставить val 
function keepOrder(ary, val) {
    for (var i = 0; i < ary.length; i++) {
    if (ary[i] >= val) return i;}
    return i;
    }