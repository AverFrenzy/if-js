let user = "John Doe"
console.log(user)

let student = "Nikita"
console.log(student)

user = student  //В переменную юзер запишится Никита
console.log(user)

let test = 1
test = test + '1' // В переменной тест будет 11 т.к. прибавили строку '1'
console.log(test)
test = test - 1  // В переменной тест будет 10 т.к. мы отнимаем цифру 1
console.log(test)
test = Boolean(test) // Будет тру т.к значение положительное
console.log(test)