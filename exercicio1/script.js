let nome;
let idade;

console.log(typeof nome, typeof idade)
// Porque eu não atribuí valor a ela

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade")

console.log(typeof nome, typeof idade)
// Mudou para String

console.log("Olá", nome, "você tem", idade, "anos.")
