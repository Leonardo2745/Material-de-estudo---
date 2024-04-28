// TÓPICO 8 - Estruturas de controle

// Estruturas de repetição

// São usadas para otimizar o codigo, fazendo com que seja realizada uma ação varias vezes;
// É utilizado WHILE, DO/WHILE E FOR;
// Enquanto algo for válido será executado;
// Você não deve se esquecer da condição de parada;

// O número zero ocupa sempre a primeira posição, ou seja:
// - VALOR: 0,1,2,3,4;
// - POSIÇ: 1,2,3,4,5;



// WHILE

// Enquanto a condição for verdadeira o loop continua;

//Lembre-se de declarar o valor do contador;
console.log("WHILE")
console.log(" ")
let contador = 0;  

//O parâmetro é a condição de execução do laço
while(contador < 5){
// Esse código será executado até atingir o parametro definido
    console.log("Contador: ", contador);
    contador++; // contador++ é a condição de parada, se não o código fica em um loop infinito
}



// DO/WHILE 

//Faz a ação e verifica se é verdadeira, enquanto valer o loop continua;
console.log(" ")
console.log("DO/WHILE")
console.log(" ")

let cont = 0;

do { //Faça...
    console.log("Cont: " ,cont)
    cont++
} while(cont < 6) //Enquanto...



//FOR 

// A declaração é da seguinte forma: for (variável cont;condição;contador++);
console.log(" ")
console.log("FOR")
console.log(" ")

for (let i = 0;i < 7; i++){
console.log("Número do contador: " ,i)
}