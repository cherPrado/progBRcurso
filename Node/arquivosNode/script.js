//até agr passamos os modulos que a GENTE criou
//dessa vez a gente vai utilizar modulos que o proprio Node já da
//ou vamos importar o modulo de uma 3º pessoa(proximas aulas)

const { Console } = require('console')
let fs = require('fs') // fs = fille system (modulo do node)

// fs.writeFile -> apaga tudo que esta no arquivo e vai reescrever "gerar um novo arquvio"
// fs.appendFile -> acrescente ao arquivo
// fs.rename -> muda o nome
// fs.unlinck -> apaga arquivo

// fs.rename('teste.txt', 'novoNome.txt', function(error){

//     if(error) 
//         throw error

//     console.log("Arquivo criado com sucesso")
// })
//
//  LEITURA DE ARQUIVOS
// fs.readFile retorna um buffer pq se o arquivo for mt grande ele pode ir 
// executando aos poucos lendo aos poucos, por isso tem que informar o 
// formato que a gente quer, no caso "UTF8", ai da certo para ler o txt

// tem que passar 
fs.readFile('novoNome.txt', 'UTF8', function (error, dadosDoArquivo) {

    if (error)
        throw error

    console.log(dadosDoArquivo)
})

// readFile (nome do arquivo, padrão, função 1º o erro e dps os dados cm parametro)









