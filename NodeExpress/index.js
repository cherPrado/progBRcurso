const express = require('express')
const path = require('path')

const app = express() //vai rodar o construtor do express e colocar dentro de app
                     //dps colocar app para escutar as requisições http

app.use("/meusite",express.static(path.join(__dirname, 'client')))//express.st serve para servir arquivos estaticos
   //quando usa esse "use" a primeira coisa que nosso "app" vai tentar fazer é ver se oq a gente passou 
   //resolve a requisição, ele tenta ver se tem um arquivo chamado index.html, se tiver ele manda
   //se estiver static vai procurar o arquivo index.html
                     
app.get("/",(req, res) =>{
    //res.set("Content-Type", "text/plain")  //res.set modifica o <HEADER>

    res.send("<h1> 'GETww'</h1>")
})

app.post("/", (req, res)=>{

    res.send("<h1>hello world 'POST'</h1>")
})

app.put("/", (req, res)=>{

    res.send("<h1>hello world 'PUT'</h1>")
})

app.delete("/", (req, res)=>{

    res.send("<h1>hello world 'delete'</h1>")
})



const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`)
}) //app.escute(a porta)


//Arquivos estaticos com node express

//arquivos estaticos tipo html podem ser modificados sem desligar o servidor, cada requisição o servidor lê 
//novamente ele, já no arquivo js do node vai precisar fechar e abrir novamente

