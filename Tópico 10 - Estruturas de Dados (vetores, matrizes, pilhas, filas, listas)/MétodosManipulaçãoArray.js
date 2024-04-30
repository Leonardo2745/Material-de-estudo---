// TÓPICO 10 - Estruturas de Dados (vetores, matrizes, pilhas, filas, listas)

// Métodos de Manipulação de Array


//Existem algumas funções que nos permitem manipular os arrays no JavaScript como:

// 1 - Função map();
// 2 - Função forEach();
// 3 - Função find();
// 4 - Função filter();
// 5 - Função reduce();
// 6 - Função some();
// 7 - Função every());


//1 - Função map():

//É usada para integrar sobre todos os elementos de um array e criar um novo array com,
// base em uma transformação aplicada a cada elemento do array origina;

const numeros = [2,4,6,8,10];

//Crie uma variável que receberá o resultado da operação definida;
const dobrados = numeros.map(numero => numero * 2);// (array => array * 2)

console.log("1-Map():");
console.log("O dobro do array inserido é: ", dobrados);
console.log("");




//2 - Função forEach()

//Executa uma dada função em cada elemento de um array;

const nums = [1,2,3,4,5];

console.log("2-ForEach() :",)

nums.forEach(numeros =>{
    console.log("O dobro deste array é:",numeros * 2);
});
console.log("")
//Essa função acima vai percorrer cada array e multiplicar ele por 2;

//Saída:
//2
//4
//6
//8
//10




//3 - Função find()

//Retorna o primeiro elemento de um array que satisfaz a condição da função callback;
//Caso contrário retorna Undefined;

const number = [1,2,3,4,5];

const numeroMaiorQueTres = number.find(numero => numero > 3);


console.log("3-find(): ")
console.log("O primeiro número maior que 3 encontrado é:",numeroMaiorQueTres);
console.log("")

//Saída: 4

//A função acima retorna o primeiro valor maior que o número inserido;




//4 - Função filter()

//Cria um novo array com os elementos que passaram no teste implementado na função;

const num = [1,2,3,4,5];

const numerosPares = num.filter(numero => numero % 2 === 0);

console.log("4-Filter(): ")
console.log("Os números que passaram no teste foram: ")
console.log(numerosPares);
console.log("")

// Saída: 2 e 4

//A função acima só apresenta os arrays que o resto da divisão(módulo"%") por 2 seja 0;





//5 - Função reduce()

//Executa uma função redutora em cada elemento do array, resultando em um único valor de retorno;

const numeross = [1,2,3,4,5];

//Nesta linha é definido a função soma, onde a var acumulador armazena o resultado anterior e soma com o próximo;

//O numero 0 não adicionará números, caso queira, mude o 0 para um número que você queira add no final da soma:
//- Se você quer adicionar +4 a soma final, basta trocar o 0 por 4;

const soma = numeross.reduce((acumulador,numero ) => acumulador + numero, 0);

console.log("5-Reduce(): ")
console.log("A redução da soma dos arrays + 0 é: ",soma);
console.log("")





//6 - Função some()

//Verifica se pelo menos um elemento do aray satisfaz a condição.
//Retorna true ou false;

const array = [1,2,3,4,5];

const even = (element) => element % 2 === 0;

console.log("6-Some(): ")
console.log("Este array possui um valor que atende a condição?: ",array.some(even));
console.log("")
//Neste array 2 valores atendem: 2 e 4
//Saída: true




//7- Função every()

//Verifica se todos os elementos do array atendem a condição;
//Retorna true ou false;

const array2 = [1,2,3,4,5];

const todosMaioresQueZero = array2.every(numero => numero > 0);

console.log("7-Every(): ")
console.log("Todos os números atendem a condição?: ",todosMaioresQueZero);

//O código acima verifica se todos os números são maiores que 0;
//Se forem retornará true, caso contrario retornará false;
