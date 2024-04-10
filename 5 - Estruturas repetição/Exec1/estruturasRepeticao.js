/*Estruturas de Repetição
1. Com as estruturas de repetição for e while, faça o que se pede:

a) Mostre os números de 1 a 50 na tela, dizendo se é par ou ímpar:

//exemplo
` 1 é ímpar
    2 é par
  3 é ímpar`
//...
` 49 é ímpar
  50 é par`
  
b) Mostre apenas os múltiplos de 3 entre 1 e 100:

3 6 9 12 ... 93 96 99
c) Mostre a seguinte sequência (de 100 até 0, pulando de dois em dois):

100 98 96 94 92 ... 6 4 2 0
*/

let i =1;
while (i <= 50){
    (i%2 == 0) == true ? document.write(`O número ${i} é par <br>`) : document.write(`O número ${i} é ímpar <br>`);
    i++;    
}

//b
document.write('<br> <br> Números múltiplos de 3: <br>')
let m = 1;
while (m <= 100){
    if (m%3 == 0) document.write(`${m} <br>`);
    m++;
}

//c
document.write('<br><br>Sequência de 100 até 0, pulando de dois em dois <br>');
for (var sequencia = 100; sequencia >= 0; sequencia--){
    document.write(sequencia);
    document.write('<br>');
    sequencia--;
} 
