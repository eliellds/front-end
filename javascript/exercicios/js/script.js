let positivo = 10;
let negativo = -5;
let decimal = 2.15;
let nome = "Eliel";
let sobrenome = "Lopes";
let solteiro = true;

console.log(positivo);
console.log(negativo);
console.log(decimal);
console.log(nome);
console.log(solteiro);

console.log(nome + " " + sobrenome);

// console.log(Nome); Uncaught ReferenceError: 
// Nome is not defined at script.js:16
// case sensitive!

let valorNulo = null;
let valorIndefinido = undefined;

console.log(valorNulo);
console.log(valorIndefinido);

let array = ["maçã", "banana", "morango", "laranja", "uva"];

console.log(array);

let raiaDrogasil = "RD está aqui agora!";

let casado = false;

console.log(casado != true)

var nota = 4;

switch (nota) {
    case 10:
    case 9:
        console.log("Melhores alunos!");
        break;
    case 8:
    case 7:
        console.log("Muito bom");
        break;
    case 6:
    case 5:
        console.log("Ufa! Você passou!");
        break;
    case 4:
        console.log("Recuperação");
        break;
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Reprovado!");
        break;
    default:
        console.log("Nota inválida!");
}