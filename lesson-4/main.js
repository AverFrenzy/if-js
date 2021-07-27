// Полиндром через цикл
const polindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    const firstSymbol = str[i]
    const lastSymbol = str[str.length -1 -i]
    if (firstSymbol !== lastSymbol) {
      return false
    }
  }
  return true
}
// Поигрался и сделал полиндром через рекурсию
const polindromRecursion = (str, n) => {
    if (n > str.length / 2) {
        return true
    }
    const firstSymb = str[n]
    const lastSymb = str[str.length -1 -n]
    if (firstSymb === lastSymb) {
        return polindromRecursion(str, n + 1)
    }
    return false
}

// Функция которая из двух чисел выбирает большее,если числа равны вадает строку что они равны
const max = (a,b) => {
  if (a > b) {
    return a
  }
  else if (b > a) {
    return b
  }
  else (a = b) 
    return 'Numbers are equal'
}

// Функция которая из двух чисел выбирает меньшее,если числа равны вадает строку что они равны
const min = (a,b) => {
  if (a < b) {
    return a
  }
  else if (b < a) {
    return b
  }
  else (a = b) 
    return 'Numbers are equal'
}

// Функция которая возвращает новый массив с замененными нулями на zero
const numbers = [10 , 13, 6, 10, 8, 20, 43, 50, 100, 25]
const result = numbers.map ((number) => {
  let str = '' + number
  if (str.includes('00')) {
    return str.replace('00', 'zerozero')
  }
  else if (str.includes('0')) {
    return str.replace('0', 'zero')
  }
  else {
    return number
  }
})
console.log(result)