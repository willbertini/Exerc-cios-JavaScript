/*Idade para votar
No Brasil, uma pessoa é obrigada a votar se tiver idade entre 18 e 70 anos. Acima de 70 anos o voto é opcional, 
assim como para quem tem 16 ou 17 anos. Quem ainda não completou 16 anos não pode votar. Através de estruturas 
condicionais, crie um programa que dirá se uma pessoa pode ou não votar, de acordo com a idade que será armazenada
em uma variável.

■ Se desejar, você pode utilizar o prompt() e pedir para que a pessoa usuária digite uma idade!
 */

let idade = prompt("Informe a idade");

if (idade >= 18 & idade <= 70){
    document.write('Voto obrigatório!');
} else if (idade < 16) {
    document.write('Não pode votar!')
} else document.write('Voto opcional!')



