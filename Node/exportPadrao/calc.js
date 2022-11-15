//colocando mais de um exporte em arquivos é necessario criar um objeto para 
// passar a propriedade do objeto que vc quer exportar

let calc = {
    mult: (x, y) => { return x * y },

    soma: (x, y) => { return x + y }
}

//module.exports = function soma(x, y){ return x + y } //exporta

//module.exports = function mult(x, y){ return x * y } por padrão exporta o ultimo

module.exports = calc