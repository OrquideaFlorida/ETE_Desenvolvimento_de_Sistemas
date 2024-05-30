//1. Realize um algoritmo que receba o peso e a altura de uma pessoa e calcule 
//o índice de massa corpórea. Ele mede a relação entre peso e altura (peso em Kg, 
//dividido pelo quadrado da altura em metros).
function massaCorporea(peso, altura){
    massaCorporea = peso/altura^2;
    console.log("Pesando", peso,"Kg, e ", altura,"m de altura ");
    console.log("O seu IMC é: ", massaCorporea.toFixed(2));
}
massaCorporea(57, 1.60);

//2. Pense e desenvolva um algoritmo que solicite a entrada de dois números inteiros
// e calcule e mostre a potência do primeiro número pelo segundo (X elevado a Y).
function elevado(num1, num2){
    elevado = num1**num2;
    console.log("O número", num1, "elevado a", num2, "A potência é: ", elevado);
}
elevado(50, 2);

//3. Implemente um algoritmo que calcule o valor em Reais, correspondente aos dólares 
//que um turista possui no cofre do hotel. O programa deve solicitar os seguintes dados: 
//Quantidade de dólares guardados no cofre e cotação do dólar naquele dia.
function reais(dolar){
    const taxa = 5.11;
    reais = dolar * taxa;
    console.log(`O valor de U$${dolar} Dólares, equivale a R$${reais} Reais`);
}
reais(5000.00);

//4. Faça outro algoritmo que leia um número inteiro e informe se ele é par ou ímpar.
function seraQuePar(numero){
    if(numero%2 == 0){
        console.log("O número", numero,"é par!");
    }else{
        console.log("O número", numero, "é ímpar!");
    }
}
seraQuePar(32);

//5. Pense e crie um algoritmo que leia dois valores diferentes e determine o maior.
function valores(v1, v2){
    if(v1 > v2){
        console.log("O maior valor entre ", v1, "e", v2, "é: ", v1);
    }else if(v1 < v2){
        console.log("O maior valor entre ", v1, "e", v2, "é: ", v2);
    }else{
        console.log("Os números são iguais");
    }
};
valores(50, 500);

//6. Considerando que um comerciante comprou um produto e quer vendê-lo com um lucro de 
//50% se o valor da compra for menor que R$ 200, caso contrário o lucro será de 30%. 
//Desenvolva um algoritmo que leia o valor da compra e exiba o valor da venda.
function venda(compra){
    if (compra > 200){
        venda = compra + (compra * 50/100);
    }else{
        venda = compra + (compra * 30/100);
    }
    console.log(`O Comerciante comprou o produto por R$${compra} e vai vendê-lo por R$${venda}`);
};
venda(300);

//7. Levando em consideração o seu salário bruto, calcule o salário líquido descontando 10% quando o 
//salário bruto for menor que R$ 2000, caso contrário descontar 20%. No final, exiba o salário líquido.
function liquido(bruto){
    if (bruto < 2000){
        liquido = bruto - (bruto * 0.10);
    }else{
        liquido = bruto - (bruto * 0.20);
    }
    console.log("Com o salário bruto de R$", bruto, "o salário líquido será R$", liquido);
}
liquido(2000);