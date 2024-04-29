// TÓPICO 9 - Modularização: Funções e procedimentos

//- Modularização consiste em dividir um programa em partes menores e independentes,
//  chamadas de Funções e Procedimentos;
//- Melhora a organização, legibilidade, manutenção e reutilização do código;


// Funções e Procedimentos



// FUNÇÕES


// - Bloco de código nomeado que recebe zero ou mais parâmetros como entrada;
// - Realiza operações e retorna um resultado;
// - Podem ser reutilizadas em diferentes partes de um programa;

//Definição de uma função:

function saudacao (nome, clima) { //Nesta linha é definido o nome e o(s) parâmetros;

    //A partir daqui você programa o que a função deve executar
 return "Olá, " + nome + "! " + "Hoje o clima está " + clima + "!"

}
// Após definir, você deve chamar a função para emitir o resultado:

let mensagem = saudacao("Leonardo","Ensolarado");
console.log(mensagem); //Saída: Olá, Josivaldo!

// Na linha 24 foram definidas as variáveis dos parâmetros;
// Na linha 29 os valores que saudacao() deve receber devem ser passados na ordem;
// Se você inverter a ordem das palavras "Leonardo" e "Ensolarado", a ordem irá,
//  mudar, pois os valores são armazenados na ordem que são inseridos.

//OBS: As variáveis definidas pelos parâmetros dentro de uma função só podem ser usadas lá,
//  essas variáveis são chamadas de variáveis locais;



// PROCEDIMENTO


// - Semelhante a uma função, porém, não retorna um valor e sim a função;
// - Executa uma sequência de instruções para realizar uma tarefa;


//Definição do procedimento:

function exibirDataAtual (){
    let dataAtual = new Date();
    console.log("Agora são: ",dataAtual.toLocaleTimeString(), " do dia ", dataAtual.toLocaleDateString());
}

//Chamada do procedimento

exibirDataAtual();


//De forma resumida, Função executa e retorna um valor, Procedimento retorna a função.