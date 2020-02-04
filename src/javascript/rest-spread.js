function rs(){
    //Rest 

//Serve para pegar o resto das propriedades 
const user = {
    nome: "Diego",
    idade: 22,
    empresa: "rocketseat"
}

//objetivo: chamar o restante dos atributos com o operador rest (...)

const { nome , ...resto} = user;

console.log(resto);

// REST aplicado em vetores 

const ls =  [1,2,3,4,5,6,7,8,9,10];

const [ x, b, ...c] = ls;

console.log(c);

//Rest aplicado em parâmetros de função

function s(...params) {
    return params.reduce((total,next) => total + next);
}

console.log(s(1,2,3,4));


/* 
<< SPREAD >> 

Propaga e repassa informações de um objeto ou array para
outra estrutura de dados  ("join de arrays e objetos")

exemplo abaixo descomentado  >>

*/

const i = [1,2,3,4,5];
const j = [6,7,8,9,10];

const SPREAD = [...i, ...j];

//Transformando array em matriz .

/* 
O primeiro elemento (i), inserido no corpo do objeto com spread,
quando é executado, na 1° parte da resposta é impresso
a posição em que cada elemento do array está posicionado. 

exemplo:: [0],[1],[2],[3] e [4]. 

Já na 2° parte da resposta, é impresso o valor atribuido
ao determinado array ou vetor.
exemplo::{10,20,30,40}

a resposta completa fica assim : 

{0:6,1:7,2:8,3:9,4:10}

*/

const spr = {...i, ...j};

console.log(SPREAD);

/* Spread tambem serve para fazer alterações em propriedades de um 
objeto. */

// exemplo

const user2 = {
    nome: "Diego",
    idade: 22,
    empresa: "rocketseat"
}

const user2alt = {...user2, nome: "Gabriel"};

console.log(user2);

console.log("propriedade nome do usuario"," status :: alterado  >> ", user2alt);

}

module.exports = rs();