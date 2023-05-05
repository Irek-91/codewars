function printerError(s) {
let sArr = s.split('');
let count = 0;
for (i = 0; i< sArr.length; i++) {
    switch(sArr[i]) {
      case 'n':
      case 'o':
      case 'p':
      case 'q':
      case 'r':
      case 's':
      case 't':
      case 'u':
      case 'v':
      case 'w':
      case 'x':
      case 'y':
      case 'z':
      count ++;
    }
}
return `${count}/${s.length}`;

}