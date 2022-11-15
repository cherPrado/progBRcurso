let s = require('./soma')
let m = require('./mult')

let arg = process.argv.slice(2)

let carac = arg[0]
let a = Number(arg[1])
let b = Number(arg[2])

let result = carac == 's' ? s.soma(a, b) : carac == 'm' ? m.mult(a, b) : "Valor inválido"

console.log(result)

