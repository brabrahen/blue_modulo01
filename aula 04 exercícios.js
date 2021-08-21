///Exercício-01
const frase = "Os limites só existem se você os deixar existir.(goku)";
console.log(frase.length)
console.log(frase.substring(48));

///Exercício-02
let upper = prompt("Digite sua frase: ");
let maius = upper.toUpperCase();
let unis = maius.split('').filter(e => e.trim().length).join('');
console.log(unis)

///Exercício-03
let nomez = prompt("Digite seu nome: ");
let upperx = nomez.toUpperCase;
let rua = prompt("Qual sua rua: ");
let lowz = rua.toLowerCase;                                 ////ERRADO
let hobby = prompt("Digite seu hobby: ");
let manooo = hobby.charAt(0).toUpperCase;

console.log(upperx);
console.log(lowz);
console.log(manooo);
________________________________________________________________________________________________________

let nomez = prompt("Digite seu nome: ");
let upperx = nomez.toUpperCase();
let rua = prompt("Qual sua rua: ");
let lowz = rua.toLowerCase();
let hobby = prompt("Digite seu hobby: ");      

console.log(upperx);
console.log(lowz);
console.log(`${hobby.charAt(0).toUpperCase(0).concat(hobby.substr(1))}`);
////CERTO

///Execício-04
let num = prompt("Digite um número e descubra se é Par ou Ímpar: ");
let prs = parseInt(num);
if (prs % 2 == 0){
    console.log("Você digitou um número par!");
} else {
    console.log("Você digitou uim número ímpar!");
};

///Exercício-05
let number = prompt("Digite um número e irei te dizer se é Positivo ou Negativo: ");
let num3 = parseInt(number);
if (num3 >= 0){
    console.log("O número é positivo!");
} else {
    console.log("O número é negativo!");
};
///Parte 2
let number = prompt("Digite um número e irei te dizer se é Positivo ou Negativo: ");
let num3 = parseInt(number);
if (num3 > 0){
    console.log("O número é positivo!");
} else if (num3 === 0){
    console.log("Opção Inválida!");
} else {
    console.log("O número é negativo");
};
______________________________________________________________

///Exercício-06
let pedenum = +prompt("Digite um número: ");
let pedenum2 = +prompt("Digite outro número e te direi se são iguais ou não:");
if (pedenum === pedenum2){
    console.log("Os números são iguais!");
} else {
    console.log("Os números são diferentes!");
};
___________________________________________________________________
///Exercício-07
const gen = prompt("Digite a primeira letra do seu gênero: F ou M");
const genF = "F";
const genM = "M";
if (gen == genF){
    console.log("Feminino");
} else if (gen === genM){
    console.log("Masculino");
} else {
    console.log("Gênero inválido!");
};
___________________________________________________________________
///Exercício-08
let nota = +prompt("Digite sua nota: ");
let uke = parseFloat(nota.toFixed(2));

if (uke < 6){
    console.log("Sua note é F")
} else if (uke >= 6 && uke <= 6.9) {
    console.log("Sua nota é D")
} else if (uke >= 7 && uke <= 7.9) {
    console.log("Sua nota é C")
} else if (uke >= 8 && uke <= 8.9) {
    console.log("Sua nota é B")
} else if (uke >= 9 && uke <= 9.9) {
    console.log("Sua nota é A")
} else if (10 === uke) {
    console.log("Sua nota é A")
}



