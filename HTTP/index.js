const http = require('http')
const url = require('url')
const fs = require('fs')


function handleFile(req, res, callback){
    let path = url.parse(req.url).pathname //"Pegou a propriedade pathname:'/index.html" 
    //e acrescentou o arquivo
    
    if(path == "" || path == "/"){
        path = "/index.html"  //path viro o url{pathname(propriedade): "e recebeu o /index.html"}
    }
    let fileName = "." + path //tem que ter o ponto na frente  ".url.pathname:'index.html' "
                              //"." o ponto fala que ela esta no msm diretorio

    fs.readFile(fileName, (err, data)=>{ // 3ª se tiver o arquivo ele vai mandar para o usuario
        if(err){
            if(callback){
                if(!callback(req, res)){ // 4ª vai verificar o callback
                    res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"})  
                    res.end("<h1>Página não encontrada</h1>")   //5º retorna página não encontrada
                }  
            }
        }else{
            res.writeHead(200, {"Content-Type": "text/html"}) //tipo que estamos enviando de resposta
            res.write(data)//oq tem no objeto/arquivo enviado
            res.end()
        }
    })

}

function handleRequest(req, res){
    let path = url.parse(req.url).pathname

    let method = req.method

    console.log(method)

    if(path == "/Teste"){
        res.end("Teste")
        return true
    }
    return false
}

http.createServer((request, response) => {//  1ª cria o servidor 
                                          //  1.1 fica esperando uma requisição  
    handleFile(request, response, handleRequest) // 2º qnd requisição chega ela vai para o handleFile

}).listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Servidor Rodando na Porta 3000 Local host")
    }
})