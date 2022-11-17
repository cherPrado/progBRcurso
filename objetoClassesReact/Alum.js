const Person = require('./Person')

class Alum extends Person{

    constructor(name, age, turma){
        super(name, age)
        this.turma = turma
    }

    greetings(){//Posso usar o metodo do objeto pai mas estou sobrescrevendo para demosntrar q é possivel
        console.log("Olá meu nome é " + this.name + "e estou na turma " + this.turma)
    }
}

module.exports = Alum