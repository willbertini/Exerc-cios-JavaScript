/*Estruturas de Repetição
2. O jogo do PIM é um jogo em que o Sílvio Santos pedia para os participantes de seu programa contar de 1 até 40 
da seguinte forma:

"1, 2, 3, PIM, 5, 6, 7, PIM, 9, 10, 11, PIM, 13, 14, 15, PIM, 17, 18, 19, PIM, 21, 22, 23, PIM, 25, 26, 27, PIM, 
29, 30, 31, PIM, 33, 34, 35, PIM, 37, 38, 39, PIM!"
Ou seja, quando o número era múltiplo de 4, o jogador tinha que falar PIM ao invés do número! Crie uma lógica que 
executa o jogo do PIM corretamente.
*/

let i =1;
while (i <= 40){
    (i%4 == 0) == true ? document.write('PIM <br>') : document.write(`${i}<br>`);
    i++;    
}
