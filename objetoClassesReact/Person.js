//como criar um objeto utilizando classes, 
//classe é uma outra maneira de criar a estrutura do objeto facilita a gente em outros momentos.
//Cria classe com letra maiúscula para saber que é uma classe
class Person{
    
    constructor(name, age){
        this.name = name;
        this.age = age;

    }

    greetings(){
        console.log("Olá, tudo bem? Meu nome é ", this.name)
    }
}

module.exports = Person

// let joao = new Person("joão", 20)
// let ana = new Person("Ana", 18)
// joao.greetings()
