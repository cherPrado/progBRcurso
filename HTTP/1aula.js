const http = require('http')

//request já manda "automatico"

http.createServer((request, response)=>{ //recebe dois parâmetros um é requisição e o outro é resposta
    //toda vez que tivermos uma requisição para o nosso servidor, essa requisição vai passar aqui por dentro
    //e aqui vai processar oq tiver que processar e vai responder ao usuario que requisitou a resposta
    //qnd vc entra em um site vc esta fazendo uma requisição do servidor essa requisição pode ser feita de 
    //varias maneiras, em varias linguagens. Essa é uma versão "simples" dps vem formas avançadas

    response.writeHead(200, {'Content-Type': 'application/json'}) //cabeçalho, 200 = codigo do status da requisição, 
                                                            // 200 é o código OK! deu tudo certo
                                                            //,{o tipo de conteúdo que a gente esta enviando como resposta}
                                                            //'text/plain' texto puro, 'text/html' texto html
    response.end(JSON.stringify({texto: "<h1>Hello World!</h1>"})) //resposta, que retorna
                                                   //json manda um objeto mas tem que converter em string
    
}).listen(3000, (err) =>{ //.listen passou a porta 3000
    if(err)
        console.log(err)
    else
        console.log("Servidor Rodando na Porta 3000")
})

