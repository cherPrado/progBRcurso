//let soma = require("./soma") //importa o modulo
//let mult = require("./mult")
let calc = require("./calc")

let args = process.argv.slice(2) // retira os dois primeiros do array para passar parametros
//tudo que pegar aqui é uma string

let a = Number(args[1]) // então tem que transformar em number
let b = Number(args[2])
let c = ""

args[0] == 's' ? c = calc.soma(a, b) : args[0] == 'm' ? c = calc.mult(a, b) : c = "Opção inválida"

console.log(c)

