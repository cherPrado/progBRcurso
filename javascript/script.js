
/*
alert("Olá Mundo")

console.log("Estava escondido aq ksksk")

for(var i = 1; i <= 10; i++){
    console.log("Executando o for " + i + " vezes")
}

var vet = new Array()

vet = ["Cherlau", "Prado", "FIM"]

console.log(vet)

console.log(vet[0])
*/

var nomes = ["Charlau", "Andrade", "Roberto"]
var notasA = [7.0, 6.8, 5.9]
var notasB = [9.8, 7.5, 4.0]

var media = function(nota1, nota2){
    return (nota1 + nota2) / 2;
}

function passou(media){
    if(media >= 6)
        return "Aprovado"
    else
        return "Reprovado"
}

for(var index in nomes){
    var m = media(notasA[index], notasB[index])

    console.log(nomes[index]+ 
        " - nota A: " + notasA[index].toFixed(2)+
        " - nota B: " + notasB[index].toFixed(2)+
        " - media final: " + m.toFixed(2) +
        " - Situação: " + passou(m)
        )
}


