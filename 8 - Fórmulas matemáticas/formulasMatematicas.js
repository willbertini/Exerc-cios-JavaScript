/*
Com base na imagem acima, faça o que se pede.
1. crie uma variável para cada figura geométrica, que armazene a fórmula que calcula a sua área.
2. Com as fórmulas armazenadas nessas variáveis, atribua valores em váriaveis para as bases, alturas e raio das figuras e calcule
a) a área do retângulo
b) a área do círculo
c) a área do triângulo retângulo
Em seguida exiba os resultados do cálculos das áreas, imprimindo as variáveis.
*/
let base;
let altura;
let raio;

let areaRetangulo;
function calculoAreaRetangulo(){
    areaRetangulo = base * altura;
    document.write(`Área do retângulo: ${areaRetangulo} <br>`);
}

let areaCirculo;
function calculoAreaCirculo(){
    areaCirculo = 3.14 * (raio * raio);
    document.write(`Área do círculo: ${areaCirculo} <br>`);
}

let areaTriangulo;
function calculoAreaTriangulo(){
    areaTriangulo = (base * altura)/2;
    document.write(`Área do triângulo: ${areaTriangulo} <br>`);
}

base = 12;
altura = 5;
raio = 3;

calculoAreaRetangulo();
calculoAreaCirculo();
calculoAreaTriangulo();



