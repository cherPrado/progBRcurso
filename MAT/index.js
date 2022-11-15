const soma = require('./soma')
const mult = require('./mult')

module.exports = {...soma, ...mult}  //importante p/ poder exportar, viro propriedades do objeto exports