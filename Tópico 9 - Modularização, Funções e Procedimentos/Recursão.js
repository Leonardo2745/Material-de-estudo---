// TÓPICO 9 - Modularização: Funções e procedimentos


// RECURSÃO

//- É um conceito onde uma função se chama até atender a condição de parada,
//   como se fosse um contador;
//- Util para resolver problemas que podem ser divididos em semelhantes:



//EXEMPLO 1:

//Função para calcular o fatorial de um número.

//num inserido 5

function fatorial (n){
    if(n === 0 || n ===1){ // O n inserido está igual a 0 ou igual a 1?
        return 1;
    }else{
        return n * fatorial(n - 1); // retorne 5 * fatorial(5 - 1), depois 5 * fatorial(4 - 1) e assim sucessivamente.
    }
}
console.log("O fatorial de 5 é: " ,fatorial(5));

//No caso acima, a função fatorial() chama a si mesma com n - 1 até que n seja 1, momento em que a,
// recursão para e o valor fatorial final é retornado.

// Fatorial de 5: 5x4x3x2x1 = Multiplicação de um numero na forma decrescente até o 1




// EXEMPLO 2:

//Função para somar os valores de um array:

function somaArray(arr){
    if(arr.length === 0){
        return 0;
    }else {
        return arr[0] + somaArray(arr.slice(1));
    }
}
console.log("A soma do array de 1 até 5 é: ",somaArray([1,2,3,4,5]));

//Neste exemplo, a função somaArray() chama a si mesma com uma parte menor do array a cada chamada,
// até que o array seja reduzido a um único elemento, e então a soma dos elementos é,
//  retornada.

// [1,2,3,4,5] -> [1,2,3,4] -> [1,2,3] -> [1,2] -> [1] 
//      15            10          6         3       1

//Ficar simples de entender:

// [1] -> [1+2] -> [1+2+3] -> [1+2+3+4] -> [1+2+3+4+5]
// [1 + 0] -> [1+2 = 3] -> [3+3 = 6] -> [6+4 = 10] -> [10+5 = 15] = 15



//EXEMPLO 3

//Função para encontrar o número de Fibonacci

//- Fibonacci é uma sequência de números onde o número é a soma dos dois números anteriores

function fibonacci (n){
    if(n <= 1){
        return n;
    }else{
        return fibonacci (n - 1) + fibonacci(n - 2);
    }
}
console.log("O fibonacci de 6 é :",fibonacci(6));

//Neste exemplo, a função fibonacci() chama a si mesma com n - 1 e n - 2 até que n seja menor ou igual
//  a 1, momento em que a recursão para. Esta é uma técnica recursiva mais complexa, pois a função
//   precisa calcular o Fibonacci de dois números anteriores para encontrar o próximo número da
//    sequência.

//RESUMIDAMENTE: 

//Você deve fazer (n - 1) + (n -2) até o n chegar em 1, depois basta ir somando os resultados,
// os 2 números anteriores de baixo pra cima;

//F(6) = (F(6 - 1)) + (F(6 - 2)) = 5 e 4 → 8 (Soma do Resultado de F(5) e F(4))
//F(5) = (F(5 - 1)) + (F(5 - 2)) = 4 e 3 → 5 (Soma do Resultado de F(4) e F(3))
//F(4) = (F(4 - 1)) + (F(4 - 2)) = 3 e 2 → 3 (Soma do Resultado de F(3) e F(2))
//F(3) = (F(3 - 1)) + (F(3 - 2)) = 2 e 1 → 2
//F(2) = (F(2 - 1)) + (F(2 - 2)) = 1 e 0 → 1


