//O IDEAL É QUE EU SEMPRE INSTALE UM PACOTE EM UM PROJETO QUE TAMBÉM 
//ESTEJA DENTRO DE UM PACOTE 

let calc = require('matematica') //'matematica' é o nome do pacote p/ usar

let arg = process.argv.slice(2)

let x = arg[0]
let y = arg[1]

console.log(calc.mult(x, y))

