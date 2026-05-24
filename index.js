/* ==================================
* Aula 01: Sintaxe e variáveis
* 09/02/2026
*  ==================================
*/
// O Java possui tipagem fraca, ou sejá a própria linguagem irá decidir qual é o tipo adequado
// Tipos primitivos de JS
var nome = "Alanzoka" //string
var iadade = 18 //int
var altura = 1.71 //float ou double
var online = false //bool

console.log("Bem-vindo " + nome)

if (true) {
    var teste = "oi"
    // "let" criar uma variavel no local exemplo:
    let exemplo = "let"
    console.log(exemplo)
}
console.log(teste)
// "const" criar uma variavel no local exemplo:(ele nao pode mudar a variavel, é constalte)
const teste2 = "Bom-dia!"

teste = "tchau"
console.log(teste)