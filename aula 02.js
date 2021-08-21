///Exercício-2
const nome = prompt("Digite seu nome: ");
const cep = prompt("Digite seu CEP: ");
const telefone = prompt("Qual o seu telefone: ");

console.log(nome);
console.log(cep);
console.log(telefone);

///Exercício-3
console.log("O que em mente hã?\nFala pra mim o que tem em mente hã?\nMe chama, mente\nPorque é somente fã\nBrinda com a gente porque essa lente range, ah\nFica na mente porque é o poder da blunt")

///Exercício-4
console.log("ALUNO (A)       NOTA");
console.log("======================");
console.log("ALINE            9.0");
console.log("MÁRIO             10");
console.log("SÉRGIO           4.5");
console.log("SHIRLEY          7.0");

///Exercício-5
console.log("Cadastro de cliente");
console.log("00 - Fim,\n01- Inclui,\n02- Altera,\n03-Exclui,\n04- Consulta");
let opcao =  prompt("Escolha sua opção: ")
console.log(opcao);

///Exercício-6
let vidamonstro = 45;
let ataque = 9;
console.log("O jogador irá derrotar o monstro em "+ vidamonstro/ataque + " turnos");

///Exercício-7
let ref = 42.54;
let porc = 0.1;
let soma = 42.54
let total = ref * porc + soma

console.log("O total da conta é R$ "+total);

///Exercício-8
let ref = 42.54;
let porc = 0.1;
let soma = 42.54;
let total = ref * porc + soma;

console.log("O total da conta é R$ "+total);

///Exercício-9
let ano = +prompt("Em que ano você nasceu? ");
let idade = 2021-ano;
console.log(idade+" anos. Parabéns, você está na flor da idade!!");

///Exercício-10
let valorReal = +prompt("Digite o seu valor em Real: ");
let escolha = +prompt("Escolha a moeda:\n01-Dólar\n02-Euro\n03-Libra Esterlina\n04-Dólar Canadense\n05-Peso Argentino\n06-Peso Chileno");
let dol = 5.42;
let euro = 6.32;
let libra = 7.39;
let dolarc = 4.22;
let arg = 0.056;
let chi = 0.0069;

if (escolha = 1) {
    console.log("O valor em Dólar é $"+valorReal * dol)
} else if (escolha = 2) {
    console.log("O valor em Euro é €"+valorReal * euro)
} else if (escolha = 3) {
    console.log("O valor em Libra é £"+valorReal * libra)
} else if (escolha = 4) {
    console.log("O valor em Dólar Canadense é C$"+valorReal * dolarc)
} else if (escolha = 5){
    console.log("O valor em Peso Argentino é $"+valorReal * arg)
} else  (escolha = 6) {
    console.log("O valor em Peso Chileno é CLP $"+valorReal * chi)
};

///Exercício-11
let valorAluguel = +prompt('Digite o valor do aluguel R$');
let igpm = 0.31;
let reajuste = (valorAluguel * igpm)+valorAluguel;
console.log("O valor do aluguel após reajuste será R$"+reajuste.toFixed(2));

///Exercício-12
const valorAluguel = +prompt("Valor do aluguel: ");
const percentualReajuste = prompt("Percentual do reajuste: ");
const percentualReajusteDecimal = (+percentualReajuste.replace("%", "") / 100) + 1;
const valorAluguelReajustado = valorAluguel * percentualReajusteDecimal;
console.log(valorAluguelReajustado);