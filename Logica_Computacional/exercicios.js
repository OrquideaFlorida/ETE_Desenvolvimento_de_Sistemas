//1. Desenvolva um algoritmo para somar dois valores inteiros 
// var num1;
// var num2;
// var soma = num1 + num2;
//------------------------------------------------
function soma(num1, num2){
    soma = num1 + num2;
}

//2. Desenvolva um algoritmo que receba dois números inteiros, encontre a soma destes e a exiba na tela.
// var num3 = 30;
// var num4 = 40;
// var soma = num3 + num4;
// console.log("O resultado da soma é: ", soma);
//---------------------------------------------------
function soma(num3, num4){
    soma = num3 + num4;
    console.log("-----SOMANDO-----");
    console.log("Somando os dois dá: ", soma);
}
soma(30, 40);

//3. Desenvolva um algoritmo que receba o primeiro e o segundo nome do usuário e que exiba as 2 palavras
//concatenadas.
// var nome = "Orquídea";
// var sobrenome = "Barbosa";
// console.log("Meu nome é " , nome + sobrenome);
//------------------------------------------------------
function nomeCompleto(nome, sobrenome){
    nomeCompleto = nome + sobrenome;
    console.log("-----MEU NOME-----");
    console.log("Meu nome é ", nome +" "+ sobrenome);
}
nomeCompleto("Orquídea", "Barbosa");

//4. Desenvolva um algoritmo que recebe três notas e retorne a sua média aritmética simples.
// var nota1 = 10;
// var nota2 = 9;
// var nota3 = 8.5;
// var media = (nota1 + nota2 + nota3) / 3;
// console.log("A média das notas é: ", media);
//-----------------------------------------------------------
function media(nota1, nota2, nota3){
    media = (nota1 + nota2 + nota3) / 3;
    console.log("---MÉDIA---");
    console.log("A média das notas é: ", media.toFixed(2));
}
media(10, 9, 8.5);

//5. Desenvolva um algoritmo que calcule o volume de uma esfera de raio R, fornecido pelo usuário. 
//(V =4/3πR^3)
// var r = 10;
// var volume = 4/3*3.14*r^3;
// console.log("O volume da esfera é: ", volume);
//------------------------------------------------------
function volume(r){
    const pi = 3.14
    volume = 4/3*pi*r^3;
    console.log("----VOLUME ESFERA----");
    console.log("O volume da esfera é: ", volume);
}
volume(10);

//6.6.Escrever um algoritmo para determinar o consumo médio de um automóvel sendo fornecida a distância
//total percorrida pelo automóvel e o total de combustível gasto
// var km = 210;
// var litro = 16;
// var consumo = km / litro;
// console.log("O consumo médio do automóvel é: " , consumo);
//----------------------------------------------------------
function consumo(km, litro){
    consumo = km / litro;
    console.log("----CONSUMO DO AUTOMÓVEL----");
    console.log("O consumo médio do automóvel é: ", consumo, "Km/l");
}
consumo(210, 16);


//7.Faça um algoritmo que receba dois números e ao final mostre a soma, subtração, multiplicação e a divisão
//dos números lidos
// var n1 = 10;
// var n2 = 5;
// const somar = n1 + n2;
// const subtrair = n1 - n2;
// const multiplicar = n1 * n2;
// const dividir = n1 / n2;
// console.log("A soma dos números é: ", somar);
// console.log("A subtração dos números é: ", subtrair);
// console.log("A multiplicação dos números é: ", multiplicar);
// console.log("A divisão dos números é: ", dividir);
//--------------------------------------------------------------
function calculo(n1, n2){
    console.log("------TABUADA-------");
    console.log("A soma dos números é: ", n1 + n2);
    console.log("A subtração dos números é: ", n1 - n2);
    console.log("A multiplicação dos números é: ", n1 * n2);
    console.log("A divisão dos números é: ", n1 / n2);
}
calculo(10, 5);

//8.Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas
//por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas,
//informar o seu nome, o salár io fixo e salário no final do mês.
// var vendedor = "Esmenielison";
// var salario = 2500;
// var vendas = 7000;
// const comissao = 15/100;
// console.log("O vendedor " + vendedor + ", que recebe R$" + salario + " de salário fixo, vai receber R$"+ (salario + vendas*comissao) + " este mês!");
//----------------------------------------------------------------------------------------------------------------------------------------------------
function dadosVendedor(vendedor, salario, vendas){
    const comissao = 15/100;
    console.log("----DADOS VENDEDOR ---");
    console.log(`O vendedor ${vendedor}, que recebe R$ ${salario} de salário fixo, vai receber R${salario + vendas * comissao} este mês!`);
}
dadosVendedor("Estelovânio", 2500, 7000);
