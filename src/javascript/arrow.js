function arrw() {
    //Arrow function

const arr = [1,2,3,4,6];

//evolução arrow function

/* 
const newarr = arr.map((item) => {
    return item * 2;
}) 
*/

// evolução 2 arrow function - se tiver apenas um parâmetro

/* 
const newarr = arr.map(item => {
    return item * 2;
}) 
*/

// evolução final arrow function - se não tiver corpo "{}" de função

 console.log(arr.map(item => item * 2));

// O ideal para uso de arrow function é em callbacks 

//retorno de arrow function em constantes/variaveis
const item = 2;
    var array = (item) => {
    return item**2;
    }
 
console.log(array(4));

// valor padrão

    var pot = (item = 2) =>  item**2;
 
console.log(pot());

}

module.exports = arrw();