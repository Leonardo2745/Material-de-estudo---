// TÓPICO 10 - Estruturas de Dados (vetores, matrizes, pilhas, filas, listas)


// - A estrutura de dados é a forma de organizar e armazenar dados de maneira eficiente;
// - Facilita o acesso, manipulação e gerenciamento;
// - Existem várias estruturas diferentes como: Vetores, Matrizes, Pilhas, Filas e Listas Encadeadas;



// VETORES(ARRAYS)

// É uma coleção ordenada de elementos, onde cada elemento é acessado por um índice numérico;

let vetor = [1,2,3,4,5]

console.log("Vetores : " )
console.log("valor posic. 0:", vetor[0]);
console.log("valor posic. 2:", vetor[2]);
console.log(" ")

//Saída: 1 e 3

//OBS: A posição do vetor sempre começa em 0
//valor [1,2,3,4,5]
//posic [0,1,2,3,4]



//MATRIZES

//É uma coleção bidimensional de elementos organizados em linhas e colunas;

let matriz = [  //posição
    [1,2,3],    //0 1 2
    [4,5,6],    //1
    [7,8,9]     //2
];   

console.log("Matizes : " )
console.log("Valor da posição da matriz :", matriz[1][2]); //Saída: 6
console.log(" ")




// PILHAS(STACKS)

//É uma estrutura de dados onde os elementos são inseridos e removidos apenas no topo da pilha;

let pilha = [];

pilha.push(1); //Inserir o elemento o topo
pilha.push(2);
pilha.push(3);

console.log("Pilha : " )
console.log("Números removidos: ",pilha.pop(), pilha.pop(), pilha.pop()); //Remover elemento do topo (ultimo inserido)
console.log(" ")

//pilha.push(numero) adiciona;
//pilha.pop() remove último número inserido;




//FILAS(QUEUES)


//É uma estrutura de dados onde os elementos são inseridos e removidos apenas no final da fila;

let fila = [];

fila.push(1); //Inserir elemento no final
fila.push(2);
fila.push(3);

console.log("Fila : " )
console.log("Números removidos: ",fila.shift(),fila.shift(),fila.shift())
console.log(" ")

//fila.push(num) insere um elemento no final
//fila.shift() remove elementos no inicio da fila




//LISTAS ENCADEADAS (Linked Lists)

//É uma coleção de elementos, onde cada elemento (nó) posui um valor e uma referência ao próximo elemento;



class No {  //primeiro deve ser criado um objeto para atribuir valores aos componentes
    constructor (valor){
        this.valor = valor;
        this.proximo = null;
    }

}
//Depois os valores devem ser inseridos
let no1 = new No(7);
let no2 = new No(3);
let no3 = new No(5);

//Aqui o atributo que recebe o valor do próximo nó deve receber o valor inserido logo após ele
no1.proximo = no2;
no2.proximo = no3;

console.log("Listas Encadeadas : " )
console.log("Valor do elemento: ",no1.valor); //Saída: 1
console.log("Valor do próximo elemento: ",no1.proximo.valor) //Saída: 2
console.log("Valor do elemento seguinte: ",no2.proximo.valor) //Saída: 2

//no1.valor = retorna o valor do nó;
//no1.proximo.valor = retorna o valor do nó seguinte;
//












































