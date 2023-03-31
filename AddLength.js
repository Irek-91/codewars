function addLength(str) {
    var split = str.split(" "); //создает массив №1 разделяя строку после символа указанного в скобках
    var result = []; // создаем массив №2
     
    for (i = 0; i < split.length; ++i) {
      result.push(split[i] + " " + split[i].length); //добавляем в массив №2 элементы массива и плюс длину элемента массива
    } 
    return result;  
  }