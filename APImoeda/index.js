let url = "https://economia.awesomeapi.com.br/last/USD-BRL"

fetch(url)
.then((res) => {

    return res.json()
})
.then((data) => {
    let h1 = document.getElementsByTagName("h1")[0]
    let valor = Number(data.USDBRL.high).toFixed(2)
    h1.innerHTML = ` R$${valor}`

})



function calc(){

    let input = document.getElementById("inputvalor")
    let val = input.value

    fetch(url)
        .then((res) => {

            return res.json()
        })
        .then((data) => {
            let p = document.getElementsByTagName("p")[0]
            let valor = Number(data.USDBRL.high)
            let resultado = valor*val
            resultado = resultado.toFixed(2)
            p.innerHTML = ` R$${resultado}`

        })
    }