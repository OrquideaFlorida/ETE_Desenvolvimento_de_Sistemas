var sorvete = "Tamarindo";
console.log(sorvete);

//index
var saboresSorv = ["coco", "chocolate", "morango", "limão"];
//console.log(saboresSorv);

saboresSorv.push("menta"); //Adiciona um elemento no final da fila
//console.log(saboresSorv);

saboresSorv.pop(); //Remove o último elemento da fila
//console.log(saboresSorv);

saboresSorv[0] = "cajá"; //Substitui  elemento do índice 0 (Coco por Cajá)
console.log(saboresSorv);

saboresSorv.splice(1, 0, "jaca", "tamarindo", "delícia de abacaxi");
// .splice(0, 0, 0) ORDEM DAS VÍRGULAS -> Índice do Array, Quantos elementos deseja excluir, 
//Nome do novo elemento
console.log(saboresSorv);

console.log(saboresSorv.length); // "Tamanho" do Array (Quantos elementos possui o Array)

//Aula 25/04

//1° inicializar a variável
//2° colocar a condição
//3° incremento da variável
for(var i = 0; i < saboresSorv.length; i++){ //Acicionar alguma infomação ao Array
    saboresSorv[i] += ", Sem Lactose";
};
console.table(saboresSorv); //console.table -> Mostra o array em forma de tabela