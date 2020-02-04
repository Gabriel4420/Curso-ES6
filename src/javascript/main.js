alert('testando...');

const toDO = require('./classes');

const MyList = new toDO;

document.getElementById('novoTodo').onclick = function(){
    MyList.add('novo todo');
}

MyList.showUser();

const mrff = require('./map-reduce-filter-find');

mrff;


const mat = require('./matematicaCls.js');



console.log(mat.sum(2,3));

const fn = require('./arrow');

fn;

/* 
Desestruturação : Destructuring (desestruturação) é uma expressão no 
Javascript que possibilita ao usuário “desempacotar” valores de um 
array ou propriedades de objetos, em variáveis diferentes!
Com ele, conseguimos criar um código mais legível, 
mais estruturado e fácil de dar manutenção!
 */

/* const usuario = {
    nome:"Gabriel Rodrigues",
    idade: 22, 
    endereco: {
        cidade: "Mirassol",
        estado: "SP"
    }
}; */


// Desestruturação na pratica
/* const { nome, idade , endereco:{ cidade } } = usuario

console.log('Nome >> '+nome +' '+
'idade >> '+ idade +' ' + ' cidade >> '+cidade);
 */

//desestruturação em parâmetros de função 

/* 

var sNome = ({nome, idade}) =>  console.log(nome, idade);

sNome(usuario); 

*/
const rs = require('./rest-spread.js');

rs;

// TEMPLATE LITERALS -- ES6 

const name = "Diego";
const idade = 24;

/* jeito antigo de concatenação
console.log("Meu nome é "+ name + " e tenho " + idade + "anos");

usando template literals para transformação 
e concatenação de variaveis. */

console.warn(`Meu nome é ${name} e tenho ${idade} anos`);

//Object short Syntax 

const u = {
    name, 
    idade,
    empresa:"rocketseat"
};

console.log(u);
/* 
<<< import & exports modules >>> 

Quando for export default, não é necessario
o uso de chaves '{}' para chamar a função 
um jeito mais facil de chamar funções padrões ou defauts 
é conforme o exemplo abaixo:

import soma from './soma'

*/
/* renomeando funções com o prefix as 
import { soma as somaF , sub, div,mux } from './calculadora'; */

//importando todas as funções em uma unica variável.
import * as f from './calculadora'

console.log(f.soma(1,2),f.sub(1,2),f.div(1,2),f.mux(2,2));

//desafio Rocketseat
import  ClasseUsuario from './functions';

import {Idade as IdadeUsuario} from './functions';

var U = new ClasseUsuario();

U.info();

const idaaade = IdadeUsuario;

console.log(idaaade);


//Promise Comum >> efeito de delay na resposta (async)

/* 

*/


const minhaPromise = () => new Promise((resolve,reject)=>{
    setTimeout(()=> {resolve('ok')}, 2000);
}); 


/* minhaPromise.then(response => {
    console.log(response);
}). catch(err => {

}); */


// async await na prática - não está integrada automaticamente ao babel 
// async await são funções do ES8

async function executaPromise(){
    /* const response = await minhaPromise();

    console.log(response);
 */
    console.log(await minhaPromise());
}

executaPromise();


import api from './api';

console.log(api.getUserInfo('diego3g'));

//Desafio 
var y = 0;
var x = y+=1;
//nova promisse com o nome de delay
const delay = () => new Promise((resolve) => setTimeout(resolve,1000));

async function umPorSegundo() {
    await delay();
    console.log('1')
    await delay();
    console.log('2')
    await delay();
    console.log('3')
    

    
    
}

umPorSegundo();
