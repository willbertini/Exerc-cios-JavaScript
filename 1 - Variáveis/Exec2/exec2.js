/*2. Crie uma lógica que armazene dois números inteiros em duas variáveis. Em seguida, troque o valor dessas variáveis 
e exiba na tela. Por exemplo, uma variável ae outra b, em algum momento avai valer b, e bvai valer a, 
mas quando a = b, o valor inicial de apode ser perdido, atenção!
 */

let numero1 = 9;
let numero2 = 8;

document.write(`Número um: ${numero1}`);
document.write('<br>');
document.write(`Número dois: ${numero2}`);
document.write('<br>');
document.write('<br>');

document.write('Variáveis trocadas:');
document.write('<br>');
let troca = numero1;
numero1 = numero2;
numero2 = troca;

document.write(`Número um: ${numero1}`);
document.write('<br>');
document.write(`Número dois: ${numero2}`);

