
var alunos = ["Iogr", "Jose"] //ARRAY

/*
    RELAÇÃO DE CHAVE X VALOR
    Objetos são parecidos com Array, em obejto é possivel criar uma
    Chave para acessar o elemento

var objeto = { } */

var aluno = {  
    nome: "João", // Propriedades do objeto
    notas: [7.5, 5.0, 8.2]    // Propriedades do objeto
  }

console.log(aluno["nome"])
console.log(aluno.nome)

console.log(aluno["notas"][0])
console.log(aluno.notas[0])

//---------------------

aluno.matricula = 20210555 /*adicionando propriedades ao objeto "diretamente",
                            precisa ir no código para mudar*/

var novaProp = "sobrenome"

aluno[novaProp] = "Oliveira" /* colocando uma variavel e com essa variavel a adicionando 
propriedades ao objeto de forma dinamica podendo mudar o valor dela pq ela é uma string, facil mudar
 "É mais útil"

aluno["sobrenome"] = "Oliveira" */

console.log(aluno)
 
//outra maneira de criar o OBJETO, até agr meio inútil isso

var aluno1 = new Object();

aluno1.nome = "Lucas"
aluno1.notas = [8,9,10]

console.log("\n"+ aluno1)
console.log(aluno1.nome)
console.log(aluno1.notas)
//--------------------------------------------------------------
//    MÉTODOS DO OBJETO

function calcMedia(){
    return (this.nota[0] + this.nota[1]) / 2;
}

var estudante = {
    nome: "Caio Antunes",
    nota: [6, 9],
    media: calcMedia
    /*
    media: function (n1, n2){ //metodo dentro de objeto  1º 
        return (n1 + n2) / 2;
    }
    media: function (){ //metodo dentro de objeto        2º 
        return (this.nota[0] + this.nota[1]) / 2;
    }
    */

}   
/*
function calcMedia(n1, n2){                              3º
    return (n1 * 2 + n2) / 3;
}
*/
//console.log(estudante.media(estudante.nota[0],estudante.nota[1]).toFixed(2)) como era no 1º

var estudante2 = {
    nome: "Lucas Pedrosa",
    nota: [8, 3],
    media: calcMedia
}   

console.log("nome: " + estudante.nome) 
console.log("média: " + estudante.media())
console.log("nome: " + estudante2.nome)
console.log("média: " + estudante2.media())

/* CONSTRUTORES DE OBJETO

var turma = [                           1ª
    {
        nome: "Igor",
        nota1: 9,
        nota2: 7,
        media: calcMedia
    },
    {
        nome: "João",
        nota1: 4,
        nota2: 8,
        media: calcMedia
    }
]*/

function criarAluno(nome, n1, n2){   // nesse ele já cria o objeto quando chamado  2ª 

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

var o = criarAluno("João", 6, 8) 

console.log(o)

//-----------------------------------

function alunoS(nome, n1, n2){  //Modelo de um objeto   3º

    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function (){
        return (this.nota1 + this.nota2) / 2
    }
}

var a = new alunoS("Bruno", 6.4, 6)    //instânciando um objeto 3º
                                       // de fato é um obejto

console.log("méd: " + a.media())

/*
var turma = [
    criarAluno("João", 6, 8),
    criarAluno("Lucas", 6, 9),
    criarAluno("Maria", 5, 4)
]

var alun = turma[0];
*/


/*
turma.forEach(function (elemento) {

    console.log(elemento)

})

for(var aluno of turma){
    console.log(aluno.nome + " - " + aluno.media())
}

*/


//basico
function obj(a, b){
    return {    
        nome: a,
        sobrenome: b 
    }
}

var p = obj("Iogr", "Antunes")

console.log(p)







