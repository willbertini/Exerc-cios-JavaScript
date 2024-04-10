/*1. Crie 5 variáveis e atribua valores, respeitando os tipos de dados a serem armazenados. Em seguida, em uma 
variável chamada profissional, concatene as variáveis abaixo formando uma string que faça sentido com os dados 
informados e apresente essa variável com o método document.write() em algum arquivo.html ou utilizando o console.log().

a. nome (string)
b. telefone (string)
c. se possui convênio médico ou não (booleano)
d. profissão (string)
e. salário (number) */

let nome = 'Willian Cristiano Bertini';
let telefone = '(16)99719-8004';
let convenio = false;
let profissao = 'Desenvolvedor';
let salario = 8000;


let textoConvenio = convenio == true ? 'possui convênio' : 'não possui convênio';
let profissional = `O profissional ${nome}, telefone ${telefone}, ${textoConvenio}, profissão ${profissao} e salário R$${salario}.`;

document.write(profissional);

