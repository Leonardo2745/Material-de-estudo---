// TÓPICO 8 - Estruturas de controle

// SWITCH/CASE(Escolha)

// Geralmente usado onde o usuário pode escolher as opções:


// - Imagine que apareceu na tela a seguinte pergunta: Você é de maior? SIM ou NÃO;
// - Se o usuário selecionar SIM ele entrará no case true;
// - Se o usuário selecionar NÃO ele entrará no case false;

console.log("Você é maior de idade?")
console.log("1-SIM")
console.log("0-NÃO")

// Para pegar o número inserido pelo usuário utilize:

//- Prompt: Emite uma caixa de input na tela no navegador.
//- ParseFloat: Converte o valor para um número de ponto flutuante.

let ehDeMaior = parseFloat(prompt("Você é maior de idade? \n 1-SIM \n 0-NÃO"))

switch (ehDeMaior){
    case 1:
        console.log("É de maior,pode dirigir")
        break  // Break é usado para sair da instrução switch depois que o caso correspondente é executado.
    case 0:
        console.log("É de menor, não pode dirigir")
        break
}


// Pode ser usado também na construção de um Menu:


console.log("Menu");
console.log("1 - Opção");
console.log("2 - Opção");
console.log("3 - Sair");



let opcao = parseFloat(prompt("Digite o numero da sua escolha: \n Menu \n 1 - Opção \n 2 - Opção \n 3 - Sair"))

switch(opcao){
    case 1:
//Se o número 1 for inserido entra aqui:
        console.log("Opção 1 foi escolhida")
        break
    case 2:
//Se o número 2 for inserido entra aqui:
        console.log("Opção 2 foi escolhida")
        break
    case 3:
//Se o número 3 for inserido entra aqui:
        console.log("Opção Sair foi escolhida")
        break
}