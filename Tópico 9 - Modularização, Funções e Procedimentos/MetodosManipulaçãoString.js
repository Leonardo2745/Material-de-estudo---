// TÓPICO 9 - Modularização: Funções e procedimentos

// Métodos de Manipulação de String


//Existem algumas funções que nos permitem manipular as Stings no JavaScript como:

// 1 - Função slice();
// 2 - Função replace();
// 3 - Função toString();
// 4 - Função search();
// 5 - Função charAt();
// 6 - Função concat();
// 7 - Função toUpperCase() e toLowerCase());


// 1 - Função slice():

//Retorna uma cópia de parte de um array de caracteres dentro de outro sem modificar o original:

const frase = "Olá, mundo!";
const parteDaFrase = frase.slice(4,10);

console.log("1-Slice() = ", parteDaFrase);
console.log("")

//Saída: mundo



// 2 - Função replace():

//Substitui uma parte de uma string por outra string:

const frase2 = "Hoje está um lindo dia!"
const novaFrase2 = frase2.replace("lindo", "maravilhoso")

console.log("2-Replace() = ", novaFrase2);
console.log("")

//Saída: Hoje está um maravilhoso dia!



// 3 - Função toString()

//Retorna uma representação string do objeto

const nums = [1,2,3,4,5];
const stringNums = nums.toString();

console.log("3-ToString() = ", stringNums);
console.log("")

//Saída: 1,2,3,4,5



// 4 - Função search()

//Busca por um padrão em uma string e retorna a posição da primeira ocorrência de padrão.
//Se não encontrar retornará -1

const frase3 = "A vida é bela e cheia de surpresas!";
const posicao = frase3.search("bela");

console.log("4-Search() = ", posicao);
console.log("")

//Saída: 9



// 5 - Função charAt()

//Retorna o caracter de uma string em uma posição específica

const frase4 = "Olá, mundo!";
const caracter = frase.charAt(5)

console.log("5-CharAt() = ", caracter);
console.log("")

//Saída: m



// 6 - Função concat()

//Concatena duas ou mais strings em uma nova

const nome = "John";
const sobrenome = "Doe";
const nomeCompleto = nome.concat(" ",sobrenome);

console.log("6-Concat() = ", nomeCompleto);
console.log("")

//Saída: John Doe



// 7 - Função toUpperCase() e toLowerCase())

//toUpperCase()= Muda uma string para MAIÚSCULO;
//toLowerCase()= Muda uma string para minúsculo;

const palavra = "Lá ele"

console.log("7-ToUpperCase() = ", palavra.toUpperCase());
console.log("7-ToLowerCase() = ", palavra.toLowerCase());

//Saída: LA ELE, la ele