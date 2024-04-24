const { Calculator } = require("./calculator")

const sum = Calculator.sum(3, 2, 1, 2)
const subtract = Calculator.subtract(10, 5, 2, 3)
const multiply = Calculator.multiply(10, 5, 2)

console.log(`sum between 3, 2, 1 and 2 is ${sum}`)
console.log(`subtract between 10, 5, 2 and 3 is ${subtract}`)
console.log(`multiply between 10, 5 and 2 is ${multiply}`)
