let smartphone = {
    marca: "Apple",
    modelo: "iPhone 15",
    ano: 2024,
    série: "123-456-789-00",
    tamanho: "6.7'",
    cor: "Azul",
    chips: 2,
    telefones: ["(81)99999-9999, (81)98888-8888"],
    ligando: function(){
        return "Trim, trim, trim, telefonema!!!"
    }
}

console.table(smartphone);
console.log(smartphone.ligando());
console.log(smartphone.telefones);