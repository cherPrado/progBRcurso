let fs = require('fs') //require trabalha com arquivos então fs vira require
// e a gente vai utilizando o fs para tratar arquivos fs.propriedade_do_require
// ex: fs.writeFile

let args = process.argv.slice(2)  //"scanf" sqn

let fileName = args[0] //vo passar o nome do arquivo q eu quero ler

fs.readFile(fileName, 'UTF8', (error, data) => {
    
    if(error) throw error

    fs.writeFile(fileName + "_uppercase", data.toUpperCase(), (error)=>{
        if(error) throw error

        console.log("Arquivo gerado com sucesso")
    })
} ) //leu o arquivo criou outro arquivo com outro nome e tudo maiúsculo

