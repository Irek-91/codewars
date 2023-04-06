//Функция принимает строку круглых скобок и определяет, является ли порядок круглых скобок допустимым.
function validParentheses(parenStr) {
    let count = 0
    for (let i = 0; i < parenStr.length; i++) {
      if (parenStr[i] == '(') {
        count++
      } else {
        count--
      }
      if (count < 0) {
        return false
      }
    }
    return count == 0
  }