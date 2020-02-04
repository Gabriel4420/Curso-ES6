function all(){
    const a = [1,3,4,5,8,9];

/* O método map() invoca a função callback 
passada por argumento para cada elemento 
do Array e devolve um novo Array como resultado. */

const newA = a.map(function(item, index){
    return item + index;
});

console.log(newA);

/* O método reduce()executa uma função reducer (provida por você) 
para cada membro do array, 
resultando num único valor de retorno.
 */
const sum = a.reduce(function(total,next){
    return total + next;
});

/* O método filter() cria um novo array com todos os 
elementos que passaram no teste implementado 
pela função fornecida.
<< retorna true or false obrigatoriamente >>
*/

console.log(sum);

const filter = a.filter(function(item){
    return item % 2 ===0;
});


console.log(filter);

/* O método find() retorna o valor do primeiro 
elemento do array que satisfizer a função 
de teste provida.Caso contrario, 
undefined é retornado. */

const find = a.find(function(item){
    return item ===4;
})

console.log(find);

}

module.exports = all();