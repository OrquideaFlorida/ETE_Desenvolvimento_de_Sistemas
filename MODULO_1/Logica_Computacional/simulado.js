//1
//Nessa questão temos a variável vendas recebendo o valor de, 5000.
//O código diz que:
//a) Se (if) as vendas forem maiores que 1000, print “parabéns, bateu a 1ª meta”.
//b) Se (elif) as vendas forem maiores que 3000, print “parabéns, bateu a 2ª meta, bônus de R$200 para o vendedor”.
//c) Se (elif) as vendas forem maiores que, 4500, print “parabéns, bateu a 3ª meta, bônus de R$500 para o vendedor”.
//*RESOLUÇÃO: LETRA A*
//--------------------------------------------------------------------------------------------------------
//2
//Faça um código pedindo ao usuário digitar um número, se o número for múltiplos de 3 o console 
//imprimirá a palavra **“Fizz”** .
//Se for múltiplo de 5 mostraremos **“Buzz”**.
//Agora, se ele for múltiplo de 3 e 5 mostre **“FizzBuzz”**.
function eMultiplo(numero){
    if (numero%3 == 0 && numero %5 == 0){
        console.log("FIZZ BUZZ");
    }else if(numero%3 == 0){
        console.log("FIZZ");
    }else if(numero %5 == 0){
        console.log("BUZZ");
    }else{
        console.log("O número não é múltiplo de 3 nem de 5");
    }
}
eMultiplo(30);
//--------------------------------------------------------------------------------------------------

//3
//Receba uma palavra pelo `console` e diga se essa palavra começa com uma vogal. 
//Imprima **sim** ou **não** no console.
function eVogal(palavra){
    if (palavra ){
        console.log("SIM!!!");
    }else{
        console.log("NÃO!!!");
    }
}
eVogal("Orquídea");
//--------------------------------------------------------------------------------------

//4
//Crie um programa que vai receber 5 notas e vai calcular a média e dizer se a aluno foi aprovada, reprovada ou
//ficou em recuperação.
//Regras:
//para ser **aprovada** a média tem que ser maior ou igual 7
//para ser **reprovada** a média tem que ser menor que 5
//para ir para **recuperação** a média tem que ser maior ou igual a 5 e menor que 7
function eAiPassou(n1, n2, n3, n4, n5){
    media = (n1 + n2 + n3 + n4 + n5) / 5
    
    if (media >= 7){
        console.log("Aprovado!");
    }else if (media >= 5 && media < 7){
        console.log("Recuperação");
    }else{
        console.log("Reprovado");
    }
}
eAiPassou(10,9,8,7,6);
//--------------------------------------------------------------------------------------------------

//5
//escreva um código que imprima na tela conforme as condições abaixo:
//1. Se for feriado **e** estiver sol, retorne que eu vou à praia.
//2. Se estiver chovendo **e** for feriado retorne que ficarei em casa assistindo Animes e doramas.
//3. Se estiver sol **ou** for sábado retorne eu vou ir à praia pegar um solzinho
//4. Se não for feriado **e** não for sábado e domingo, retorne que eu vou trabalhar porque preciso
//pagar minhas dívidas.
//5. adicione uma default com algo que você faria quando não atender nenhuma as alternativas
//anteriores.
function oQueFazer(dia, tempo){
    if(dia == "Feriado" && tempo == "Sol"){
        console.log("Eu vou a praia!");
    }else if (dia == "Feriado" && tempo == "Chovendo"){
        console.log("Ficarei em casa, assistindo Animes e Doramas!");
    }else if (tempo == "Sol" || dia == "Sábado"){
        console.log("Vou ir à praia pegar um solzinho!");
    }else if (dia != "Sábado" && dia != "Domingo" && dia != "Feriado"){
        console.log("Vou trabalhar porque preciso pagar minhas dívidas!");
    }else{
        console.log("Sem condição, bixo!");
    }
}
oQueFazer("Segunda", "Chovendo");
//-------------------------------------------------------------------------------------------------------

//6
//Crie uma função que receba dois números e exiba no console uma contagem regressiva entre else,
//contando de dois em dois números. Por exemplo: recebendo o número inicial 20 e o final 0, a função
//deverá imprimir em sequência 20 18 16 14 12 10 8 6 4 2 0.
for(let regressiva = 20; regressiva >= 0; regressiva -= 2){
    console.log(regressiva);
}

//7
// crie uma função que receba um número qualquer devolva o seguinte padrão como resultado
// (inclusive com os espaços). Por exemplo, caso receba o número 6 como parâmetro:

// ```
// *
// **
// ***
// ****
// *****
// ******
// ```


//8
//Desenvolva um programa que apresente o maior e o menor valores da sequência ([54, 10, 29, 87, 7, 64])
let qualMaior = [54, 10, 29, 87, 7, 64];


//9
// Crie uma array com 7 elementos e realize as atividades a seguir: 
// 1. Adicione 3 elemento no fim da array;
// 2. adicione 2 elementos no início da array;
// 3. adicione 1 elemento no índice 5;
// 4. exclua 2 elementos no fim da array;
// 5. exclua 1 elemento do início da array;
// 6. imprima todos os elementos;
// 7. substitua o elemento do índice 2.
let elemento = ["terra", "fogo", "vento", "água", "coração", "capitão", "planeta"];
console.table(elemento);
//1)
elemento.push("com", "união", "poderes");
//console.table(elemento);
//2)
elemento.splice(0, 0, "vai", "planeta!");
//console.table(elemento);
//3)
elemento[5] = "O Quinto Elemento"
//console.table(elemento);
//4)
elemento.splice(10, 2);
//console.table(elemento);
//5)
elemento.splice(0,1);
//console.table(elemento);
//6)
console.table(elemento);
//7)
elemento[2] = "2 é Demais"
//console.table(elemento);

//10
//Crie uma função que peça ao usuário um número entre 0 e 100 e imprima o número 
//+ se o número é ímpar ou par.
function imparPar(num){
    if (num >= 0 && num <= 100){
        if (num%2 == 0){
            console.log("O número", num, "é par!");
        }else{
            console.log("O número", num, "é ímpar!");
        }
    }else{
        console.log("Digite apenas números de 0 à 100");
    }
}
imparPar(37);