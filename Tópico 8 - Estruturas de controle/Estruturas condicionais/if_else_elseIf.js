// TÓPICO 8 - Estruturas de controle

// São estruturas que permitem controlar o fluxo de um programa.


// Estruturas condicionais

// - São estruturas que executam blocos de código diante de condições específicas;
// - São usados: IF, ELSE, ELSE IF, SWITCH/CASE(outro arq.);


// IF(Se)

//Executa somente se a condição for verdadeira:

let condicao = true;

if (condicao) {
//Só entra nesse bloco se a condição for atendida
    console.log("A condição é verdadeira")
}

// Saída: A condição é verdadeira




// ELSE(Senão)

//Executa somente se a condição não for verdadeira:

let idade = 15;

if (idade >= 18){
// Se a condição for verdadeira ela entra aqui;
    console.log("É maior de idade, já pode dirigir")
} else {
// Se a condição for falsa ela entra aqui;
    console.log("É menor de idade, não pode dirigir")
}

// Saída: É menor de idade, não pode dirigir




//ELSE IF(Senão se)

//Usado quando possui mais "opções" em um if, como se fosse blocos de verificação;

let idd = 4;

if (idd >= 18 && idd <= 21){
//Se for true entra aqui;
    console.log("Jovem Jovem")
    ehDeMaior = true;

}else if(idd >= 21 && idd <= 25){
//Se atender estas condições entra aqui;   
    console.log("Jovem")

} else if(idd > 25 && idd <= 35){
 //Se atender estas condições entra aqui; 
    console.log("Jovem Adulto")

} else if(idd > 35 && idd <65){
//Se atender estas condições entra aqui; 
    console.log("Adulto")

} else if(idd >= 65){
//Se atender estas condições entra aqui; 
    console.log("Sr Idoso")

} else {
//Se for false entra aqui; 
    console.log("Ainda é uma criança")
}

// Saída: Adulto