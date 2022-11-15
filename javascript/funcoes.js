



function media(n1, n2){
    var nota1 = n1
    var nota2 = n2
    var media = (nota1 + nota2) / 2;
    console.log(media);
}

/*função "da um apelido para um bloco de comando", 
toda vez que ela for chamada o computador vai executar 
todo o bloco de comando    */

media(120, 60)
media(89, 56)

//--------------------------------------------------

function mediaReturn(n1, n2){
    var nota1 = n1
    var nota2 = n2
    var media = (nota1 + nota2) / 2;
    return media
}

let resultado1 = mediaReturn(90, 30)
let resultado2 = mediaReturn(20, 66)

console.log("\n" + resultado1)
console.log(resultado2)

function saudacao(){

    return "Opa eae?"
}

var a = saudacao() //recebe o valor do return
var b = saudacao //variavel vira a função

console.log(a) //emprime o valor da variavel (resultado da função)
console.log(b) //imprime oque é a variavel (função)
console.log(b()) //executa a variavel que é função

//Importante !! -------------------------------

var media = function(c, d){ /*como eu já estou atribuindo a função a
uma variavel eu não preciso colocar nome na função. */
 
    return (c + d) / 2;              
}

console.log(media(10,6)+"\n\n")

//------------------

var nomes = ["Charlau", "Lucas", "Yuri"]
var notasA = [7.0, 6.8, 5.9]
var notasB = [9.8, 7.5, 8.2]

var media = function(n1, n2){
    return (n1, n2) / 2;
}

for(var index in nomes){

    console.log(nomes[index]+ 
        " - nota A: " + notasA[index]+
        " - nota B: " + notasB[index]+
        " - media final: " + media(notasA[index], notasB[index]))
}
