let calc = require('./calc')

let arg = process.argv.slice(2)

let carac = arg[0]
let a = Number(arg[1])
let b = Number(arg[2])

let result = carac == 's' ? calc.soma(a, b) : carac == 'm' ? calc.mult(a, b) : "Valor inválido"

console.log(carac)
console.log(result)

