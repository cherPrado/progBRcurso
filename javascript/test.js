








function pegaDados(funcao){

    const dados = {
        nome: 'mario'
    }

    funcao(dados)
}

pegaDados(function qndProntoTraz(dados){ //a gente quer pegar esses dados mas cm pode demorar a gente passa uma função
    console.log(dados)
})

//console.log('Obababa aaaa')