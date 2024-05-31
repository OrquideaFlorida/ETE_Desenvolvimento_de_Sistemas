// let smartphone = {
//     marca: "Apple",
//     modelo: "iPhone 15",
//     ano: 2024,
//     série: "123-456-789-00",
//     tamanho: "6.7'",
//     cor: "Azul",
//     chips: 2,
//     telefones: ["(81)99999-9999, (81)98888-8888"],
//     ligando: function(){
//         return "Trim, trim, trim, telefonema!!!"
//     }
// }

// console.table(smartphone);
// console.log(smartphone.ligando());
// console.log(smartphone.telefones);

function Celular(marca, modelo, ano, série, tamanho, cor, telefone){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.série = série;
    this.tamanho = tamanho;
    this.cor = cor;
    this. telefone = telefone;
    this.ligando = function(ligando){return ligando}
}

let Apple = new Celular("Apple", "iPhone 15", 2024, "123-456-789-00","6.7'", "Azul", "(81)99999-9999")
let samsung = new Celular("Samsung", "Galaxy M55", "2024", "987-654-321-00", "6.7", "Dourado", "(81)97777-6333");
console.table(Apple);
console.log(Apple.ligando("Trin, Trin, Trin, telefonema, telefonema"))
console.table(samsung);
console.log(Apple.ligando("Piririnpin, piririnpin, piririn pin pin!!!!"));
