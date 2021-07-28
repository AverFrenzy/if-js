// 1-ый пример
const numbers = [2, 3, 5, 8]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
console.log(sum)
// 2-ой пример
const secondNumbers = [2, 5, 8, 15, 0, 6, 20, 3]
for (let i = 0; i < secondNumbers.length; i++) {
  if (secondNumbers[i] > 5 && secondNumbers[i] < 10) {
    console.log(i) 
  }
}
// 3-ий пример (Новый массив не создавал т.к. в примере 2 и 3 они с одинаковыми значениями)
for (let i = 0; i < secondNumbers.length; i++) {
  if (secondNumbers[i] % 2 === 0 && secondNumbers[i] != 0) {
    console.log(i) 
  }
}