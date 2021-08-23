// Function that checks if word is a polindrome(made with cycle and conditions)
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
// Function that checks if word is a polindrome(made with recursion)
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
// Function that checks if word is a polindrome(made with array methods)
function polindromReverse(word) {
  return word === word.split("").reverse().join("");
}

// Function that choose the biggest number 
const max = (a,b) => a > b ? a : b

// Function that choose the lowest number 
const min = (a,b) => a < b ? a : b

// Function that returns new array and change 0 on 'zero' in new array
const numbers = [10 , 13, 6, 10, 8, 20, 43, 50, 100, 25]
const changeZero = (numbers) => numbers.map((number) => String(number).includes('0') ? String(number).replaceAll('0', 'zero') : number);

console.log(changeZero(numbers))
console.log(numbers)

