// TÓPICO 7 - Operadores Aritméticos, Relacionais e Lógicos

// Operadores Lógicos

// - Operadores usados para combinar e negar expressões lógicas
// - Verdadeiro(true) = 1 , Falso(false) = 0;


// And(E) "&&": Retorna true se ambas as expresões forem verdadeiras;
// Or(Ou) "||": Retorna true se tiver pelo menos uma das expressões forem verdadeiras;
// Not(Negação) "!": Inverte o valor das expressões;
// Xor(Ou exclusivo) "Representado com um circulo com o símbolo "+" no meio",
//  retorna true SOMENTE se uma das expressões for verdadeira;

//OBS: Na tabela verdade os símbolos podem ser:
// - AND: "^"; "."; "*"
// - OR: "+"; "seta para baixo";
// - NOT: "¬";"~";
// - XOR: "Circulo com o "+" no meio;


// AND

//Se A=0 e B=1

console.log(A && B); //false

//Se A=1 e B=0

console.log(A && B); //false

//Se A=0 e B=0

console.log(A && B); // false

//Se A=1 e B=1

console.log(A && B); //true



// OR

//Se A=0 e B=1

console.log(A || B); //true

//Se A=1 e B=0

console.log(A || B); //true

//Se A=0 e B=0

console.log(A || B); // false

//Se A=1 e B=1

console.log(A || B); //true



// NOT 

//Se A=0

console.log(!(A)); //true

//Se A=1

console.log(!(A)); //false



// XOR (Representado como "/" pq não achei o símbolo kkkkkkk)

//Se A=0 e B=1

console.log(A / B); //true

//Se A=1 e B=0

console.log(A / B); //true

//Se A=0 e B=0

console.log(A / B); // false

//Se A=1 e B=1

console.log(A / B); //false
